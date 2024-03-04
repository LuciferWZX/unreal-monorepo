import { FC } from 'react';
import { ReactCommentInputProps } from '../editor';
export interface PreviewEditorProps extends Pick<ReactCommentInputProps, 'value' | 'htmlToSlateConfigOptions' | 'slateToDomConfigOptions' | 'renderElementConfig' | 'isInlineElementTypes' | 'isVoidElementTypes' | 'isMarkableVoidElementTypes' | 'className' | 'style'> {
    mode?: 'preview';
}
declare const PreviewEditor: FC<PreviewEditorProps>;
export default PreviewEditor;
