import {
  ContextMenu,
  ResizablePanel,
  ContextMenuOptions,
  cn,
  ScrollArea,
  Tree,
} from '@wzx-unreal/jb-design';
import workflowSpaceIcon from '@/assets/workflow_space.svg';
import workflowIcon from '@/assets/workflow.svg';
import styles from './index.module.css';
import { useMemo, useRef } from 'react';
import { useSize } from '@wzx-unreal/react-hooks';
import { match, P } from 'ts-pattern';
import useContextMenuTarget from '@/pages/workflow-page/workflow_space/useContextMenuTarget.ts';
import useWorkflowTree from '@/pages/workflow-page/workflow_space/useWorkflowTree.tsx';
import useWorkflowStore from '@/stores/useWorkflowStore.ts';
const WorkflowSpace = () => {
  const ref = useRef(null);
  const size = useSize(ref);
  const { targetKey, setTargetKey } = useContextMenuTarget();
  const [treeData, openKeys, { addTreeData, setOpenKeys }] = useWorkflowTree();
  const baseOptions: ContextMenuOptions[] = useMemo(() => {
    const baseItem: ContextMenuOptions[] = [
      {
        key: 'add_workflow',
        label: '新建工作流',
        icon: <img src={workflowIcon} alt={'工作流'} />,
      },
      {
        key: 'add_folder',
        label: '新建目录',
        icon: <img src={workflowSpaceIcon} alt={'空间'} />,
      },
    ];
    const treeItemBase = match(targetKey)
      .with(null, () => {
        return baseItem;
      })
      .otherwise(() => {
        return baseItem.concat([
          {
            key: 'delete_workflow',
            label: '删除工作流',
          },
        ]);
      });
    return treeItemBase.map((_op) => {
      return {
        ..._op,
        onClick: () => {
          match(_op.key)
            .with('add_workflow', () => {
              addTreeData(targetKey);
            })
            .with('add_folder', () => {
              addTreeData(targetKey, 'dir');
            })
            .otherwise(() => undefined);
        },
      };
    });
  }, [addTreeData, targetKey]);
  const clickTreeItem = (key: string) => {
    match(key).with(P.string.startsWith('wk_'), (_key) => {
      const cacheMap = useWorkflowStore.getState().workflowBuilderMap;
      console.log(111, cacheMap);
      if (!cacheMap.has(_key)) {
        useWorkflowStore.getState().handleWorkflowBuilderMap('set', _key, '我是数据');
      }
    });
  };
  return (
    <ResizablePanel defaultSize={20} minSize={1}>
      <ContextMenu
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
                    <Tree
                      expandKeys={openKeys}
                      onExpandKeysChanges={setOpenKeys}
                      onClickItem={clickTreeItem}
                      onContextMenu={(_, _key) => {
                        setTargetKey(_key || null);
                      }}
                      treeData={treeData}
                    />
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
