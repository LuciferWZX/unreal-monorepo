import { Editor, Node as SlateNode, Path as SlatePath } from 'slate';
import { isCollapsed } from '@/core/helper';

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
