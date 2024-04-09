import { FC, HTMLAttributes, ReactNode } from 'react';
import './index.css';
import TreeContainer from '@/components/tree/TreeContainer';
import ThreeItem from '@/components/tree/ThreeItem';
import { match, P } from 'ts-pattern';
import { isUndefined } from '@wzx-unreal/react-hooks';
import SubTreeContainer from '@/components/tree/SubTreeContainer';
export interface BaseTreeData extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'children'> {
  title: string | ReactNode;
  key: string;
}
export interface TreeNodeData extends BaseTreeData {
  children?: TreeNodeData[];
}
export interface TreeLeafData extends BaseTreeData {
  isLeaf?: boolean;
}
export type TreeData = TreeNodeData | TreeLeafData;
interface TreeProps {
  indent?: number;
  height?: number;
  width?: number;
}
const Tree: FC<TreeProps> = (props) => {
  const { indent = 20, height, width } = props;
  const treeData: TreeData[] = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    },
  ];
  const renderTree = (_treeData: TreeData[], _indent: number = 0) => {
    return _treeData.map((item) => {
      return match(item)
        .with({ children: P.not(undefined) }, (_, value) => {
          return (
            <SubTreeContainer key={item.key}>
              <ThreeItem key={item.key} indent={_indent}>
                {item.title}
              </ThreeItem>
              {renderTree(value.children, _indent + indent)}
            </SubTreeContainer>
          );
        })
        .otherwise(() => {
          return (
            <ThreeItem key={item.key} indent={_indent}>
              {item.title}
            </ThreeItem>
          );
        });
      // return <ThreeItem key={item.key}>{item.title}</ThreeItem>;
    });
  };
  return (
    <TreeContainer height={height} width={width}>
      {renderTree(treeData)}
    </TreeContainer>
  );
};
export default Tree;
