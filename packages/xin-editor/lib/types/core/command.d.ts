import { Editor } from 'slate';
declare const EditorCommand: {
    isBoldMarkActive(editor: Editor): boolean;
    toggleBoldMark(editor: Editor): void;
};
export default EditorCommand;
