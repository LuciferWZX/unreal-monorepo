import { Editor } from 'slate';
import { CustomElementType } from '@/types';

const withInLine = (
  editor: Editor,
  isInlineElementTypes?: string[],
  isVoidElementTypes?: string[],
  isMarkableVoidElementTypes?: string[]
) => {
  const { isInline, isVoid, markableVoid } = editor;
  editor.isInline = (element) => {
    if (element.type === CustomElementType.MENTION) {
      return true;
    }
    return isInlineElementTypes?.includes(element.type) ? true : isInline(element);
  };
  editor.isVoid = (element) => {
    if (element.type === CustomElementType.MENTION) {
      return true;
    }
    return isVoidElementTypes?.includes(element.type) ? true : isVoid(element);
  };
  editor.markableVoid = (element) => {
    if (element.type === CustomElementType.MENTION) {
      return true;
    }
    return isMarkableVoidElementTypes?.includes(element.type) || markableVoid(element);
  };
  return editor;
};
export default withInLine;
