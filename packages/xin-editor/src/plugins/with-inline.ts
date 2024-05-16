import {
  Editor,
  Node as SlateNode,
  Range as SlateRange,
  Point as SlatePoint,
  Path as SlatePath,
  BaseOperation,
} from 'slate';
import { getParentPathByType } from '@/core/getPathUtils';
import { CustomElementType } from '@/types';
import { INLINE_TYPES } from '@/core/config';
import { CustomElement } from '../../custom-slate';
import { createUUID } from '@/core/randomId';

const withInline = (editor: Editor) => {
  const { apply } = editor;
  editor.apply = (op) => {
    let newOp = op;
    if (newOp.type === 'set_selection') {
      if (SlateRange.isRange(newOp.newProperties) && SlateRange.isCollapsed(newOp.newProperties)) {
        const tPath = getParentPathByType(
          editor,
          newOp.newProperties.anchor.path,
          CustomElementType.Link
        );
        if (tPath && SlatePoint.equals(Editor.end(editor, tPath), newOp.newProperties.anchor)) {
          const parentPath = tPath.slice(0, -1);
          const pChildEnd = Editor.end(editor, parentPath);
          if (SlatePath.equals(pChildEnd.path, tPath)) {
            newOp = insertLeaf(tPath);
          } else {
            const entry = Editor.next(editor, { at: tPath });
            if (entry) {
              const [nextText, nextPath] = entry;
              const nextNode = SlateNode.get(editor, nextPath.slice(0, -1));
              if (
                SlatePath.isAncestor(parentPath, nextPath) &&
                !INLINE_TYPES.includes((nextNode as CustomElement).type)
              ) {
                const start = Editor.start(editor, nextPath);

                newOp = {
                  ...newOp,
                  newProperties: {
                    anchor: start,
                    focus: start,
                  }!,
                };
              } else {
                newOp = insertLeaf(tPath);
              }
            }
          }
        }
      }
    }
    apply(newOp);
  };
  return editor;
};
function insertLeaf(path: SlatePath) {
  const newOp: BaseOperation = {
    type: 'insert_node',
    path: [...path.slice(0, -1), path.pop()! + 1],
    node: { text: '', anchorId: createUUID() },
  };
  return newOp;
}
export default withInline;
