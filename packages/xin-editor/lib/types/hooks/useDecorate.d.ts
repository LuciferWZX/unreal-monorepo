import { BaseRange, NodeEntry } from 'slate';
declare const useDecorate: () => {
    decorate: (entry: NodeEntry) => BaseRange[];
};
export default useDecorate;
