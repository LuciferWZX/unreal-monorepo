import { Element as SlateElement, Editor, Transforms } from 'slate';
import { normalizeLink } from '@/modules/link-module/normalizeLink';
import { CustomElement } from '../../custom-slate';
import normalizeTableCell from '@/modules/table-module/normalize-table-cell';

const withNormalizeNode = (editor: Editor) => {
  const { normalizeNode, insertData } = editor;
  editor.normalizeNode = (entry) => {
    const [_node, path] = entry;
    const node = _node as CustomElement & { text?: string };
    if (!node || !path) {
      return;
    }
    if (path?.length === 0) {
      const { children } = node;
      if (!!children && children?.length !== 0) {
        for (let i = 0; i < children.length; i++) {
          const child: any = children[i];
          if (!child.type || !!child.text) {
            Transforms.removeNodes(editor, { at: [i] });
            return;
          }
        }
      }
    }
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
      // if (normalizeTableCell(editor, entry)) {
      //   console.log('normalizeTableCell');
      //   return;
      // }
    }
    normalizeNode(entry);
  };
  return editor;
};
export default withNormalizeNode;
