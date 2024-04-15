import { useEffect, useMemo, useState } from 'react';
import useWorkflowStore from '@/stores/useWorkflowStore.ts';
import { TabOptions } from '@wzx-unreal/jb-design';
import workflowIcon from '@/assets/workflow.svg';
import { useShallow } from 'zustand/react/shallow';
import { match, P } from 'ts-pattern';
import { FlowBuilder } from '@/components';
interface TabActionsType {
  setWorkflowKey: (key: string | undefined) => void;
}
const useTab = (): [string | undefined, TabOptions[], TabActionsType] => {
  const [workflowKey, setWorkflowKey] = useState<string | undefined>(undefined);
  const cacheMap = useWorkflowStore(useShallow((state) => state.workflowBuilderMap));
  const options: TabOptions[] = useMemo(() => {
    return Array.from(cacheMap.entries()).map(([key, data]) => {
      return {
        value: key,
        label: data.name,
        icon: <img src={workflowIcon} alt={data.name} />,
        onClose: (e, value) => {
          e.preventDefault();
          console.info('[删除:]', value);
          useWorkflowStore.getState().handleWorkflowBuilderMap('remove', value);
        },
        closeable: true,
        content: <FlowBuilder />,
      };
    });
  }, [cacheMap]);
  useEffect(() => {
    match(workflowKey)
      .with(undefined, () => {
        //说明没有选择
        match(options).with(P.not([]), (_options) => {
          //说明有工作流
          setWorkflowKey(_options[0].value);
        });
      })
      .otherwise((_workflowKey) => {
        match(options).with(P.not([]), (_options) => {
          //如果当前有选中的工作流
          const target = _options.find((_op) => _op.value === _workflowKey);
          match(target).with(undefined, () => {
            setWorkflowKey(_options[0].value);
          });
        });
      });
  }, [options, workflowKey]);
  const actions: TabActionsType = {
    setWorkflowKey,
  };
  return [workflowKey, options, actions];
};
export default useTab;
