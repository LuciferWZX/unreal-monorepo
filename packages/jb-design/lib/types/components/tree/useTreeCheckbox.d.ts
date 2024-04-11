import { TreeData } from './Tree';
export declare function useTreeCheckbox(treeData: TreeData[], checkedValues: string[]): {
    findHierarchy: (_treeData: TreeData[], key: string) => string[] | null;
    getChildrenKeys: (_treeData: TreeData[], key: string) => string[];
};
export default useTreeCheckbox;
