import { create } from 'zustand';

interface EditorStoreType {
  keyword: string;
}
interface EditorStoreActionsType {}
const initialValue: EditorStoreType = {
  keyword: '',
};
const useEditorStore = create<EditorStoreType & EditorStoreActionsType>((set) => ({
  ...initialValue,
}));
export default useEditorStore;
