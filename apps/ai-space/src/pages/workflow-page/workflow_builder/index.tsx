import { ResizablePanel, Tab, TabOptions, cn } from '@wzx-unreal/jb-design';
import workflowIcon from '@/assets/workflow.svg';
import styles from './index.module.css';
import { useMemo, useState } from 'react';
import useWorkflowStore from '@/stores/useWorkflowStore.ts';
import { useShallow } from 'zustand/react/shallow';
const WorkflowBuilder = () => {
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
          console.log(123, value);
        },
        closeable: true,
        content: (
          <div>
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
          </div>
        ),
      };
    });
  }, [cacheMap]);
  return (
    <ResizablePanel minSize={50}>
      <Tab
        value={workflowKey}
        onValueChange={setWorkflowKey}
        className={cn(styles.ai_tab)}
        options={options}
        classes={{ content: styles.ai_tab_content }}
      />
    </ResizablePanel>
  );
};
export default WorkflowBuilder;
