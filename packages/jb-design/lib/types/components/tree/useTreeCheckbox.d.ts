import { TreeData } from './Tree';
export declare function useTreeCheckbox(treeData: TreeData[], checkedValues: string[]): {
    findHierarchy: (_treeData: TreeData[], key: string) => string[] | null;
    findPath: (_treeData: TreeData[], key: string) => string[] | null;
};
export default useTreeCheckbox;
