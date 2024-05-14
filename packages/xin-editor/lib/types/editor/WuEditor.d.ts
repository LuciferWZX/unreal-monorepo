/// <reference types="react" />
import { Descendant, Editor } from 'slate';
export interface WuEditorProps<VT extends Descendant = Descendant> {
    placeholder?: string;
    initialValue?: VT[];
    theme?: 'light' | 'dark';
    classes?: {
        toolbar?: string;
        editor?: string;
    };
}
export interface WuEditorRef {
    editor: Editor;
}
declare const WuEditor: import("react").ForwardRefExoticComponent<WuEditorProps<Descendant> & import("react").RefAttributes<WuEditorRef>>;
export default WuEditor;
