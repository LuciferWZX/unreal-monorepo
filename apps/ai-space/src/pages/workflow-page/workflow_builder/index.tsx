import { ResizablePanel, Tab, cn, Toggle, MoreVertical, Space } from '@wzx-unreal/jb-design';
import styles from './index.module.css';
import { match, P } from 'ts-pattern';
import useTab from '@/pages/workflow-page/workflow_builder/useTab.tsx';
const WorkflowBuilder = () => {
  const [workflowKey, options, { setWorkflowKey }] = useTab();
  return (
    <ResizablePanel minSize={50}>
      {match(options.length)
        .with(P.not(0), () => {
          return (
            <Tab
              value={workflowKey}
              onValueChange={setWorkflowKey}
              className={cn(styles.ai_tab)}
              options={options}
              actions={
                <Space style={{ padding: '0 10px' }}>
                  <Toggle pressed={false} value={'more'}>
                    <MoreVertical />
                  </Toggle>
                </Space>
              }
              tabProps={{ hideScrollY: true }}
              classes={{ content: styles.ai_tab_content }}
            />
          );
        })
        .otherwise(() => {
          return null;
        })}
    </ResizablePanel>
  );
};
export default WorkflowBuilder;
