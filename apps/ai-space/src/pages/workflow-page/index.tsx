import { FC } from 'react';
import { Content } from '@/components';
import styles from './index.module.css';
import { cn, ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@wzx-unreal/jb-design';
const WorkflowPage: FC = () => {
  const classes = cn(styles.ai_workflow_content);
  return (
    <Content className={classes}>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={20} minSize={1}>
          tree
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize={1}>xx</ResizablePanel>
      </ResizablePanelGroup>
    </Content>
  );
};
export default WorkflowPage;
