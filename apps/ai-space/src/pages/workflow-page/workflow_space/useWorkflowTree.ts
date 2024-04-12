import { useState } from 'react';
import { TreeData } from '@wzx-unreal/jb-design';
import { getId } from '@/utils';
import { match } from 'ts-pattern';

interface WorkflowTreeActions {
  addTreeData: (targetKey: string | null) => void;
}
const useWorkflowTree = (): [TreeData[], WorkflowTreeActions] => {
  const [treeData, setTreeData] = useState<TreeData[]>([]);
  const addTreeData = (targetKey: string | null) => {
    match(targetKey)
      .with(null, () => {
        const newTreeData: TreeData = {
          title: '新建工作流',
          key: getId(),
        };
        setTreeData((_oldTreeData) => _oldTreeData.concat(newTreeData));
      })
      .otherwise((_targetKey) => {
        console.log(_targetKey);
      });
  };
  return [treeData, { addTreeData }];
};
export default useWorkflowTree;
