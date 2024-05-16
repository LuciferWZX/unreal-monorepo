import { Editor, Path as SlatePath, Node as SlateNode, Element as SlateElement } from 'slate';
import { CustomElementType } from '@/types';

export function getParentPathByType(editor: Editor, path: SlatePath, type: CustomElementType) {
  if (!path) {
    return null;
  }
  const len = path.length;
  for (let i = len - 1; i >= 0; i--) {
    const node = SlateNode.has(editor, path.slice(0, i)) && SlateNode.get(editor, path.slice(0, i));
    if (node && SlateElement.isElement(node) && node.type === type) {
      return path.slice(0, i);
    }
  }
  return null;
}
