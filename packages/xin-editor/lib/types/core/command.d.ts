import { Editor } from 'slate';
import { TextAlign, TextHeading } from '../types';
declare const EditorCommand: {
    selectAllInModule(editor: Editor): true | undefined;
    isBoldMarkActive(editor: Editor): boolean;
    toggleBoldMark(editor: Editor): void;
    isItalicMarkActive(editor: Editor): boolean;
    toggleItalicMark(editor: Editor): void;
    isUnderlineMarkActive(editor: Editor): boolean;
    toggleUnderlineMark(editor: Editor): void;
    isTextAlignMarkActive(editor: Editor): boolean | TextAlign;
    toggleTextAlignMark(editor: Editor, align?: TextAlign): void;
    isTextHeadingMarkActive(editor: Editor): boolean | TextHeading;
    toggleTextHeadingMark(editor: Editor, heading?: TextHeading): void;
    isCheckListNode(editor: Editor): boolean;
    toggleCheckListNode(editor: Editor): void;
    isOrderedListNode(editor: Editor): boolean;
    toggleOrderedListNode(editor: Editor): void;
    indent(editor: Editor): void;
    restoreNormal(editor: Editor): void;
    isParagraphNode(editor: Editor): boolean;
    isOrderedNode(editor: Editor): boolean;
    toggleOrderedNode(editor: Editor): boolean;
    toggleLinkNode(editor: Editor, linkProps: {
        link: string;
        title?: string;
    }): void;
};
export default EditorCommand;
