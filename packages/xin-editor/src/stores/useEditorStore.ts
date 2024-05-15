import { create } from 'zustand';

interface EditorStoreType {
  keywords: string[];
}
interface EditorStoreActionsType {}
const initialValue: EditorStoreType = {
  keywords: [],
};
const useEditorStore = create<EditorStoreType & EditorStoreActionsType>((set) => ({
  ...initialValue,
}));
export default useEditorStore;
