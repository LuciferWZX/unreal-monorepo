import { FC } from 'react';
import { Descendant } from 'slate';
export interface WuEditorProps<VT extends Descendant = Descendant> {
    placeholder?: string;
    initialValue?: VT[];
    theme?: 'light' | 'dark';
}
declare const WuEditor: FC<WuEditorProps>;
export default WuEditor;
