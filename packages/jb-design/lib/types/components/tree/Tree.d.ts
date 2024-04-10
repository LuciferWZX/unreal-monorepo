import { FC, HTMLAttributes, ReactNode } from 'react';
export interface BaseTreeData extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'children'> {
    title: string | ReactNode;
    key: string;
    hint?: string | ReactNode;
    icon?: boolean | ReactNode;
    checkable?: boolean;
}
export interface TreeNodeData extends BaseTreeData {
    chevron?: boolean | ReactNode | ((isExpand?: boolean) => ReactNode);
    children?: TreeData[];
}
export interface TreeLeafData extends BaseTreeData {
    isLeaf?: boolean;
}
export type TreeData = TreeNodeData | TreeLeafData;
interface TreeProps {
    indent?: number;
    height?: number;
    width?: number;
    defaultExpandKeys?: string[];
    onExpandKeysChanges?: (keys: string[]) => void;
    defaultCheckedValues?: string[];
    checkedValues?: string[];
    onCheckedValuesChanges?: (values: string[]) => void;
    expandKeys?: string[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    checkable?: boolean;
}
declare const Tree: FC<TreeProps>;
export default Tree;
