import { FC } from 'react';
import { Content } from '@/components';
import styles from './index.module.css';
import { cn, ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@wzx-unreal/jb-design';
import WorkflowSpace from "@/pages/workflow-page/workflow_space";
const WorkflowPage: FC = () => {
  const classes = cn(styles.ai_workflow_content);
  return (
    <Content className={classes}>
      <ResizablePanelGroup direction="horizontal">
        <WorkflowSpace />
        <ResizableHandle />
        <ResizablePanel minSize={50}>xx</ResizablePanel>
      </ResizablePanelGroup>
    </Content>
  );
};
export default WorkflowPage;
