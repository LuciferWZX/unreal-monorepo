import { FC } from 'react';
import { Content } from '@/components';
import styles from './index.module.css';
import { cn, ResizablePanelGroup, ResizableHandle } from '@wzx-unreal/jb-design';
import WorkflowSpace from '@/pages/workflow-page/workflow_space';
import WorkflowBuilder from '@/pages/workflow-page/workflow_builder';
const WorkflowPage: FC = () => {
  const classes = cn(styles.ai_workflow_content);
  return (
    <Content className={classes}>
      <ResizablePanelGroup direction="horizontal">
        <WorkflowSpace />
        <ResizableHandle />
        <WorkflowBuilder />
      </ResizablePanelGroup>
    </Content>
  );
};
export default WorkflowPage;
