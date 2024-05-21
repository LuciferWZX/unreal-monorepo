import { create } from 'zustand';
import { Node as SlateNode } from 'slate';
interface TableStoreState {
  selectedNodes: SlateNode[];
}
const initialState: TableStoreState = {
  selectedNodes: [],
};
const TableStore = create<TableStoreState>(() => ({ ...initialState }));
export default TableStore;
