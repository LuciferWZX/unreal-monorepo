import { Editor } from 'slate';
import { CustomElementType } from '@/types';

const withLink = (editor: Editor) => {
  const { isInline } = editor;
  editor.isInline = (element) => {
    return element.type === CustomElementType.Link ? true : isInline(element);
  };
  return editor;
};
export default withLink;
