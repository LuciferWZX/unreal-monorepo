import { CustomElement } from '@/types';
import { Editor } from 'slate';

const withInLine = (
  editor: Editor,
  isInline?: (element: CustomElement) => boolean,
  isVoid?: (element: CustomElement) => boolean
) => {
  if (isInline) {
    editor.isInline = isInline;
  }
  if (isVoid) {
    editor.isVoid = isVoid;
  }

  return editor;
};
export default withInLine;
