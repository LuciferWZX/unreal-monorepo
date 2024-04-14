import { useMemo, useState } from 'react';
import { TreeData } from '@wzx-unreal/jb-design';
import workflowSpaceIcon from '@/assets/workflow_space.svg';
import workflowIcon from '@/assets/workflow.svg';
import { getId } from '@/utils';
import { match, P } from 'ts-pattern';
import useWorkflowStore, { WorkflowSpaceDataType } from '@/stores/useWorkflowStore.ts';
import { useShallow } from 'zustand/react/shallow';

interface WorkflowTreeActions {
  addTreeData: (targetKey: string | null, type?: 'file' | 'dir') => void;
  setOpenKeys: (keys: string[]) => void;
  findTreeDataByKey: (treeData: TreeData[], key: string) => TreeData | undefined;
  deleteTreeDataByKey: (key: string | null) => void;
  findWorkflowSpaceDataByKey: (
    workflowSpaceData: WorkflowSpaceDataType[],
    key: string
  ) => WorkflowSpaceDataType | undefined;
}
const useWorkflowTree = (): [
  WorkflowSpaceDataType[],
  TreeData[],
  string[],
  WorkflowTreeActions,
] => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [workflowSpaceData] = useWorkflowStore(useShallow((state) => [state.workflowSpace]));

  const addTreeData = (targetKey: string | null, type: 'file' | 'dir' = 'file') => {
    const newTreeData: WorkflowSpaceDataType = match(type)
      .with('dir', () => {
        return {
          title: '新建空间',
          key: getId(12, 'sp_'),
          chevron: false,
          children: [],
        };
      })
      .otherwise(() => {
        return {
          title: '新建工作流',
          key: getId(12, 'wk_'),
        };
      });
    match(targetKey)
      .with(null, () => {
        useWorkflowStore.setState({
          workflowSpace: workflowSpaceData.concat(newTreeData),
        });
      })
      .otherwise((_targetKey) => {
        useWorkflowStore.setState({
          workflowSpace: insertTreeData(workflowSpaceData, _targetKey, newTreeData),
        });
      });
  };
  const insertTreeData = (
    _treeData: WorkflowSpaceDataType[],
    _targetKey: string,
    _inertData: WorkflowSpaceDataType
  ): WorkflowSpaceDataType[] => {
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

          return _treeData.map((_td) => {
            return match(_td)
              .with({ key: _target.key }, () => {
                return { ..._target, children: _target.children.concat(_inertData) };
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
  const findWorkflowSpaceDataByKey = (
    _workflowSpaceData: WorkflowSpaceDataType[],
    key: string
  ): WorkflowSpaceDataType | undefined => {
    const target = _workflowSpaceData.find((item) => item.key === key);
    return match(target)
      .with(undefined, () => {
        const withChildren = _workflowSpaceData.filter((_td) =>
          match(_td).with({ children: P.not(undefined) }, () => true)
        );
        let result: WorkflowSpaceDataType | undefined = undefined;
        for (let i = 0; i < withChildren.length; i++) {
          const _target = withChildren[i];

          match(_target).with({ children: P.not(undefined) }, (_hasChildTarget) => {
            result = findWorkflowSpaceDataByKey(_hasChildTarget.children, key);
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
  function convertToTreeData(data: WorkflowSpaceDataType[]): TreeData[] {
    return data.map((item) => {
      return match<WorkflowSpaceDataType, TreeData>(item)
        .with({ children: P.not(undefined) }, (_item) => {
          return {
            ..._item,
            icon: <img src={workflowSpaceIcon} alt={'空间'} />,
            children: convertToTreeData(_item.children),
          };
        })
        .otherwise((_item) => {
          return {
            ..._item,
            icon: <img src={workflowIcon} alt={'工作流'} />,
          };
        });
    });
  }
  function deleteWorkflowSpaceDataByKey(
    _treeData: WorkflowSpaceDataType[],
    key: string
  ): WorkflowSpaceDataType[] {
    return match<WorkflowSpaceDataType[], WorkflowSpaceDataType[]>(_treeData)
      .with(
        P.when((i) => i.find((item) => item.key === key)),
        (_td) => {
          //当前数组就有，直接过滤掉
          return _td.filter((_item) => _item.key !== key);
        }
      )
      .otherwise((_td) => {
        //当前数组没有，递归查找children
        return _td.map((_item) => {
          return match<WorkflowSpaceDataType, WorkflowSpaceDataType>(_item)
            .with({ children: P.not(undefined) }, (_it) => {
              return { ..._it, children: deleteWorkflowSpaceDataByKey(_it.children, key) };
            })
            .otherwise((_it) => {
              return _it;
            });
        });
      });
  }
  const deleteTreeDataByKey = (key: string | null) => {
    if (!key) {
      return;
    }
    useWorkflowStore.setState((state) => {
      const newData = deleteWorkflowSpaceDataByKey(state.workflowSpace, key);
      return {
        workflowSpace: newData,
      };
    });
  };
  const treeData = useMemo(() => {
    return convertToTreeData(workflowSpaceData);
  }, [workflowSpaceData]);
  return [
    workflowSpaceData,
    treeData,
    openKeys,
    {
      addTreeData,
      setOpenKeys,
      findTreeDataByKey,
      deleteTreeDataByKey,
      findWorkflowSpaceDataByKey,
    },
  ];
};
export default useWorkflowTree;
