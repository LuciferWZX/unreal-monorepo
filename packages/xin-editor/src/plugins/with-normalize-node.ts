import { Element as SlateElement, Editor, Transforms } from 'slate';
import { normalizeLink } from '@/modules/link-module/normalizeLink';
import { CustomElement } from '../../custom-slate';

const withNormalizeNode = (editor: Editor) => {
  const { normalizeNode, insertData } = editor;
  editor.normalizeNode = (entry) => {
    const [_node, path] = entry;
    const node = _node as CustomElement & { text?: string };
    // if (!node || !path) {
    //   return;
    // }
    if (typeof node.text === 'string' && Array.isArray(node.children)) {
      const newChildren = node.children;
      const newText = node.text;
      Transforms.insertNodes(editor, [{ text: newText }], { at: path });
      const next: number[] = [...path.slice(0, -1), path[path.length - 1] + 1];
      Transforms.removeNodes(editor, { at: next });
    }
    if (SlateElement.isElement(node)) {
      if (normalizeLink(editor, entry)) {
        return;
      }
    }
    normalizeNode(entry);
  };
  return editor;
};
export default withNormalizeNode;
