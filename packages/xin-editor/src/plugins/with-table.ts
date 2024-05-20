import {
  Editor,
  Element as SlateElement,
  Range as SlateRange,
  Point as SlatePoint,
  Transforms,
} from 'slate';
import { CustomElementType } from '@/types';

const withTable = (editor: Editor) => {
  const { deleteBackward, deleteForward, apply } = editor;
  editor.deleteBackward = (unit) => {
    const { selection } = editor;
    console.log('删除deleteBackward');
    if (selection && SlateRange.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === CustomElementType.TableCell,
      });
      if (cell) {
        const [, cellPath] = cell;
        const start = Editor.start(editor, cellPath);
        if (SlatePoint.equals(selection.anchor, start)) {
          // //说明删除到头了
          const preCell = Editor.previous(editor, {
            match: (n) =>
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              n.type === CustomElementType.TableCell,
          });
          console.log(111, preCell);
          if (preCell) {
            const [, preCellPath] = preCell;
            const end = Editor.end(editor, preCellPath);
            //说明前面还是有节点，focus到后面的节点
            Transforms.move(editor, { reverse: true, distance: 1 });
          }

          return;
        }
      }
    }
    deleteBackward(unit);
  };
  editor.deleteForward = (unit) => {
    const { selection } = editor;
    console.log('删除deleteForward');
    if (selection && SlateRange.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === CustomElementType.TableCell,
      });

      if (cell) {
        const [, cellPath] = cell;
        const end = Editor.end(editor, cellPath);

        if (SlatePoint.equals(selection.anchor, end)) {
          return;
        }
      }
    }

    deleteForward(unit);
  };
  editor.apply = (op) => {
    // const newOp = op;
    // if (newOp.type === 'set_selection') {
    //   if (SlateRange.isRange(newOp.newProperties) && SlateRange.isCollapsed(newOp.newProperties)) {
    //     console.log(123, newOp);
    //   }
    // }
    apply(op);
  };
  return editor;
};
export default withTable;
