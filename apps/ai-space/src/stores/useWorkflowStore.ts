import { create } from 'zustand';
import { TreeData } from '@wzx-unreal/jb-design';
import { createJSONStorage, persist } from 'zustand/middleware';
import { produce, enableMapSet } from 'immer';
import { match } from 'ts-pattern';
enableMapSet();
interface WorkflowBuilderDataType {
  id: string;
  name: string;
}
interface WorkflowStoreType {
  workflowSpace: TreeData[];
  workflowBuilderMap: Map<string, WorkflowBuilderDataType>;
}
interface WorkflowStoreActionsType {
  handleWorkflowBuilderMap: (
    type: 'set' | 'remove' | 'clear',
    key: string,
    value?: WorkflowBuilderDataType
  ) => void;
}
const initialValue: WorkflowStoreType = {
  workflowSpace: [],
  workflowBuilderMap: new Map([]),
};
const useWorkflowStore = create(
  persist<WorkflowStoreType & WorkflowStoreActionsType>(
    (set) => ({
      ...initialValue,
      handleWorkflowBuilderMap: (type, key, value) => {
        set(
          produce((_state: WorkflowStoreType & WorkflowStoreActionsType) => {
            match(type)
              .with('set', () => {
                _state.workflowBuilderMap.set(key, value as WorkflowBuilderDataType);
              })
              .with('remove', () => {
                _state.workflowBuilderMap.delete(key);
              })
              .with('clear', () => {
                _state.workflowBuilderMap.clear();
              });
          })
        );
      },
    }),
    {
      name: 'ai-space',
      storage: createJSONStorage(() => localStorage, {
        reviver: (key, value) => {
          return match(key)
            .with('workflowBuilderMap', () => {
              return new Map(value as [string, string][]);
            })
            .otherwise(() => value);
        },
        replacer: (_, value) => {
          return match(value instanceof Map)
            .with(true, () => {
              return Array.from((value as Map<string, string>).entries());
            })
            .otherwise(() => value);
        },
      }),
      partialize: (state) => ({ ...state, workflowSpace: [] }),
    }
  )
);
export default useWorkflowStore;
