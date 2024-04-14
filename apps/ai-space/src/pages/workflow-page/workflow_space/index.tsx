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
import { useMemo, useRef, useState } from 'react';
import { useBoolean, useSize } from '@wzx-unreal/react-hooks';
import { match, P } from 'ts-pattern';
import useContextMenuTarget from '@/pages/workflow-page/workflow_space/useContextMenuTarget.ts';
import useWorkflowTree from '@/pages/workflow-page/workflow_space/useWorkflowTree.tsx';
import useWorkflowStore from '@/stores/useWorkflowStore.ts';
import RenameModal from '@/pages/workflow-page/workflow_space/RenameModal.tsx';
const WorkflowSpace = () => {
  const ref = useRef(null);
  const size = useSize(ref);
  const { targetKey, setTargetKey } = useContextMenuTarget();
  const [
    ,
    treeData,
    openKeys,
    { addTreeData, setOpenKeys, findTreeDataByKey, deleteTreeDataByKey },
  ] = useWorkflowTree();
  const [renameKey, setRenameKey] = useState<string | null>(null);
  const [renameOpen, { set: setRenameOpen }] = useBoolean(false);
  const isSpace = (key: string) => {
    return match(key)
      .with(P.string.startsWith('sp_'), () => true)
      .otherwise(() => false);
  };
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
      .otherwise((_targetKey) => {
        return baseItem.concat([
          {
            key: 'rename',
            label: '重命名',
            keepIcon: true,
          },
          {
            key: 'delete_workflow',
            label: isSpace(_targetKey) ? '删除空间' : '删除工作流',
            keepIcon: true,
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
            .with('delete_workflow', () => {
              console.log('[删除:]', targetKey);
              deleteTreeDataByKey(targetKey);
            })
            .with('rename', () => {
              console.log('[重命名:]', targetKey);
              setRenameKey(targetKey);
              setRenameOpen(true);
            })
            .otherwise(() => undefined);
        },
      };
    });
  }, [addTreeData, targetKey]);
  const clickTreeItem = (key: string) => {
    match(key).with(P.string.startsWith('wk_'), (_key) => {
      const cacheMap = useWorkflowStore.getState().workflowBuilderMap;
      if (!cacheMap.has(_key)) {
        const target = findTreeDataByKey(treeData, _key);
        match(target).with(P.not(undefined), (_target) => {
          useWorkflowStore.getState().handleWorkflowBuilderMap('set', _target.key, {
            id: _target.key,
            name: _target.title as string,
          });
        });
      }
    });
  };
  return (
    <ResizablePanel defaultSize={20} minSize={1}>
      <RenameModal
        afterClose={() => setRenameKey(null)}
        open={renameOpen}
        workflowKey={renameKey}
        onClose={() => setRenameOpen(false)}
      />
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
