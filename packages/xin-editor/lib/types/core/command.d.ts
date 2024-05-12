import { Editor } from 'slate';
declare const EditorCommand: {
    isBoldMarkActive(editor: Editor): boolean;
    toggleBoldMark(editor: Editor): void;
    isParagraphNode(editor: Editor): boolean;
    isCheckListNode(editor: Editor): boolean;
    toggleCheckListNode(editor: Editor): void;
};
export default EditorCommand;
