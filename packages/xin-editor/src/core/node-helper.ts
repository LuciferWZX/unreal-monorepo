import {
  Editor,
  Node as SlateNode,
  Path as SlatePath,
  Element as SlateElement,
  NodeEntry,
} from 'slate';
import { isCollapsed } from '@/core/helper';
import { CustomElementType } from '@/types';

export const isSameNode = (editor: Editor) => {
  const { selection } = editor;
  if (!selection || isCollapsed(editor)) {
    return true;
  }
  //共同祖先的path
  const [, path] = SlateNode.common(editor, selection.anchor.path, selection.focus.path);
  //长度为0说明是整个node节点，那就不是同一个节点
  return path.length !== 0;
};
export const getSelectedNodesByType = (editor: Editor, types: CustomElementType[]) => {
  const { selection } = editor;
  if (!selection) {
    throw Error('selection is null');
  }
  const nodesGenerator = Editor.nodes(editor, {
    at: selection,
    match: (n) => SlateElement.isElement(n) && types.includes(n.type),
  });
  const nodeEntries: NodeEntry<SlateNode>[] = [];
  for (const entry of nodesGenerator) {
    nodeEntries.push(entry);
  }
  return nodeEntries;
};
