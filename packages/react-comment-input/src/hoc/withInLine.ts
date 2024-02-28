import { CustomElement } from '@/types';
import { Editor } from 'slate';

const withInLine = (
  editor: Editor,
  isInlineElementTypes?: string[],
  isVoidElementTypes?: string[]
) => {
  const { isInline } = editor;
  editor.isInline = (element) => {
    return isInlineElementTypes?.includes(element.type) ? true : isInline(element);
  };
  editor.isVoid = (element) => {
    return !!isVoidElementTypes?.includes(element.type);
  };

  return editor;
};
export default withInLine;
