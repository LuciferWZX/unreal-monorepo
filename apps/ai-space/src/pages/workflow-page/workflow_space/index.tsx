import {
  ContextMenu,
  ResizablePanel,
  ContextMenuOptions,
  cn,
  ScrollArea,
  Tree,
} from '@wzx-unreal/jb-design';
import styles from './index.module.css';
import { useMemo, useRef } from 'react';
import { useSize } from '@wzx-unreal/react-hooks';
import { match } from 'ts-pattern';
import useContextMenuTarget from '@/pages/workflow-page/workflow_space/useContextMenuTarget.ts';
import useWorkflowTree from '@/pages/workflow-page/workflow_space/useWorkflowTree.ts';
const WorkflowSpace = () => {
  const ref = useRef(null);
  const size = useSize(ref);
  const { targetKey, setTargetKey } = useContextMenuTarget();
  const [treeData, { addTreeData }] = useWorkflowTree();
  const baseOptions: ContextMenuOptions[] = useMemo(() => {
    const _base: ContextMenuOptions[] = [
      {
        key: 'add_workflow',
        label: '新建工作流',
        onClick: () => {
          console.log('新建工作流');
          addTreeData(targetKey);
        },
      },
    ];
    return match(targetKey)
      .with(null, () => {
        return _base;
      })
      .otherwise((_key) => {
        return _base.concat([
          {
            key: 'delete_workflow',
            label: '删除工作流',
            onClick: () => {
              console.log('删除工作流:', _key);
            },
          },
        ]);
      });
  }, [targetKey]);
  return (
    <ResizablePanel defaultSize={20} minSize={1}>
      <ContextMenu
        onContextMenu={(e) => {
          const target = e.target as HTMLElement;
          console.log(2222, target);
          const targetKey = target.getAttribute('data-key');
          setTargetKey(targetKey);
        }}
        onOpenChange={(open) => {
          if (!open) {
            setTargetKey(null);
          }
        }}
        options={baseOptions}
      >
        <aside ref={ref} className={cn(styles.workflow_space)}>
          {match(size)
            .with(undefined, () => null)
            .otherwise((_size) => {
              return (
                <ScrollArea
                  type="auto"
                  style={{
                    width: _size.width,
                    height: _size.height,
                    padding: '8px 0',
                  }}
                >
                  <div className={cn(styles.workflow_space_tree)}>
                    <Tree treeData={treeData} />
                  </div>
                </ScrollArea>
              );
            })}
        </aside>
      </ContextMenu>
    </ResizablePanel>
  );
};
export default WorkflowSpace;
