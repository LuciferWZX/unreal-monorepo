import { Node as SlateNode } from 'slate';
interface TableStoreState {
    selectedNodes: SlateNode[];
}
declare const TableStore: import("zustand").UseBoundStore<import("zustand").StoreApi<TableStoreState>>;
export default TableStore;
