import { ResizablePanel, Tab, TabOptions, Button, cn } from '@wzx-unreal/jb-design';
import workflowIcon from '@/assets/workflow.svg';
import styles from './index.module.css';
import { useState } from 'react';
const WorkflowBuilder = () => {
  const [workflowKey, setWorkflowKey] = useState<string | undefined>(undefined);
  const options: TabOptions[] = [
    {
      value: '1',
      label: '工作流1',
      icon: <img src={workflowIcon} alt={'工作流'} />,
      onClose: (e, value) => {
        e.preventDefault();
        console.log(123, value);
      },
      closeable: true,
      content: ' Hello World',
    },
    {
      value: '2',
      label: '工作流2',
      closeable: true,
      content: (
        <div>
          <Button>xx</Button>
        </div>
      ),
    },
  ];
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
