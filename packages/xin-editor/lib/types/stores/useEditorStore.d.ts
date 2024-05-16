interface EditorStoreType {
    keyword: string;
}
interface EditorStoreActionsType {
}
declare const useEditorStore: import("zustand").UseBoundStore<import("zustand").StoreApi<EditorStoreType & EditorStoreActionsType>>;
export default useEditorStore;
