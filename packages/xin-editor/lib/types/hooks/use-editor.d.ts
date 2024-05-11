import { Descendant, Editor } from 'slate';
declare const useEditor: () => [import("../../custom-slate").CustomEditor, {
    showPlaceholder: boolean;
    handlePlaceholder: (val: Descendant[]) => void;
}];
export default useEditor;
