import { create } from 'zustand';
import { TreeData } from '@wzx-unreal/jb-design';
import { createJSONStorage, persist } from 'zustand/middleware';
import { produce, enableMapSet } from 'immer';
import { match } from 'ts-pattern';
enableMapSet();
interface WorkflowStoreType {
  workflowSpace: TreeData[];
  workflowBuilderMap: Map<string, string>;
}
interface WorkflowStoreActionsType {
  handleWorkflowBuilderMap: <T = string>(
    type: 'set' | 'remove' | 'clear',
    key: string,
    value?: T
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
                _state.workflowBuilderMap.set(key, JSON.stringify(value));
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
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useWorkflowStore;
