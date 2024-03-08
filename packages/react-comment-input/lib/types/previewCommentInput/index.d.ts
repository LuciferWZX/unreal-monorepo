import { FC } from 'react';
import { ReactCommentInputProps } from '../editor';
export interface PreviewCommentInputProps extends Pick<ReactCommentInputProps, 'value' | 'htmlToSlateConfigOptions' | 'slateToDomConfigOptions' | 'renderElementConfig' | 'isInlineElementTypes' | 'isVoidElementTypes' | 'isMarkableVoidElementTypes' | 'className' | 'style'> {
    mode?: 'preview';
}
declare const PreviewCommentInput: FC<PreviewCommentInputProps>;
export default PreviewCommentInput;
