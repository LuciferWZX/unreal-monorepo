import { useState } from 'react';
import { TreeData } from '@wzx-unreal/jb-design';
import workflowSpaceIcon from '@/assets/workflow_space.svg';
import workflowIcon from '@/assets/workflow.svg';
import { getId } from '@/utils';
import { match, P } from 'ts-pattern';
import useWorkflowStore from '@/stores/useWorkflowStore.ts';
import { useShallow } from 'zustand/react/shallow';
import { isArray } from '@wzx-unreal/react-hooks';

interface WorkflowTreeActions {
  addTreeData: (targetKey: string | null, type?: 'file' | 'dir') => void;
  setOpenKeys: (keys: string[]) => void;
  findTreeDataByKey: (treeData: TreeData[], key: string) => TreeData | undefined;
}
const useWorkflowTree = (): [TreeData[], string[], WorkflowTreeActions] => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [treeData] = useWorkflowStore(useShallow((state) => [state.workflowSpace]));
  const setTreeData = (fn: ((_treeData: TreeData[]) => TreeData[]) | TreeData[]) => {
    if (isArray(fn)) {
      useWorkflowStore.setState({ workflowSpace: fn });
      return;
    }
    useWorkflowStore.setState({ workflowSpace: fn(treeData) });
  };
  const addTreeData = (targetKey: string | null, type: 'file' | 'dir' = 'file') => {
    const newTreeData: TreeData = match(type)
      .with('dir', () => {
        return {
          title: '新建空间',
          key: getId(12, 'sp_'),
          chevron: false,
          icon: <img src={workflowSpaceIcon} alt={'空间'} />,
          children: [],
        };
      })
      .otherwise(() => {
        return {
          title: '新建工作流',
          key: getId(12, 'wk_'),
          icon: <img src={workflowIcon} alt={'工作流'} />,
          isLeaf: true,
        };
      });
    match(targetKey)
      .with(null, () => {
        setTreeData((_oldTreeData) => _oldTreeData.concat(newTreeData));
      })
      .otherwise((_targetKey) => {
        setTreeData((_oldTreeData) => insertTreeData(_oldTreeData, _targetKey, newTreeData));
      });
  };
  const insertTreeData = (
    _treeData: TreeData[],
    _targetKey: string,
    _inertData: TreeData
  ): TreeData[] => {
    const target = _treeData.find((item) => item.key === _targetKey);
    if (target) {
      return match(target)
        .with({ children: P.not(undefined) }, (_target) => {
          //如果有children属性说明是个目录,插入目录
          match(_target.children.length).with(0, () => {
            _target.chevron = true;
          });
          //打开该目录
          setOpenKeys((_openKeys) =>
            match(_openKeys)
              .with(
                P.when((_i) => _i.includes(_target.key)),
                () => {
                  return _openKeys;
                }
              )
              .otherwise((_keys) => {
                return _keys.concat(_target.key);
              })
          );
          _target.children = _target.children.concat(_inertData);
          return _treeData.map((_td) => {
            return match(_td)
              .with({ key: _target.key }, () => {
                return _target;
              })
              .otherwise((_t) => {
                return _t;
              });
          });
        })
        .otherwise(() => {
          //如果没有children属性说明不是个目录插入同级
          return _treeData.concat(_inertData);
        });
    }
    //如果没找到就去children里面找
    return _treeData.map((td) => {
      return match(td)
        .with({ children: P.not(undefined) }, (_target) => {
          _target.children = insertTreeData(_target.children, _targetKey, _inertData);
          return _target;
        })
        .otherwise((_td) => {
          return _td;
        });
    });
  };
  const findTreeDataByKey = (_treeData: TreeData[], key: string): TreeData | undefined => {
    const target = _treeData.find((item) => item.key === key);
    return match(target)
      .with(undefined, () => {
        const withChildren = _treeData.filter((_td) =>
          match(_td).with({ children: P.not(undefined) }, () => true)
        );
        let result: TreeData | undefined = undefined;
        for (let i = 0; i < withChildren.length; i++) {
          const _target = withChildren[i];

          match(_target).with({ children: P.not(undefined) }, (_hasChildTarget) => {
            result = findTreeDataByKey(_hasChildTarget.children, key);
          });
          if (result) {
            return result;
          }
        }
        return result;
      })
      .otherwise((_target) => {
        return _target;
      });
  };
  return [treeData, openKeys, { addTreeData, setOpenKeys, findTreeDataByKey }];
};
export default useWorkflowTree;
