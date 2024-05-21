import {
  Editor,
  Element as SlateElement,
  Range as SlateRange,
  Point as SlatePoint,
  Transforms,
  BaseSelection,
  BaseRange,
} from 'slate';
import { CustomElementType } from '@/types';

const withTable = (editor: Editor) => {
  const { deleteBackward, deleteForward, insertBreak, apply, deleteFragment, setFragmentData } =
    editor;
  editor.setFragmentData = (data) => {
    console.log('table setFragmentData:', data);
    setFragmentData(data);
  };
  editor.deleteBackward = (unit) => {
    const { selection } = editor;
    console.log('删除deleteBackward');
    if (selection && SlateRange.isCollapsed(selection)) {
      if (isSelectedTable(editor, selection)) {
        return;
      }

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
          // const preCell = Editor.previous(editor, {
          //   match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n),
          // });
          // if (preCell) {
          //   const [, preCellPath] = preCell;
          //   const end = Editor.end(editor, preCellPath);
          //   //说明前面还是有节点，focus到后面的节点
          //   Transforms.move(editor, { reverse: true, distance: 1 });
          // }

          return;
        }
      }
    }
    deleteBackward(unit);
  };
  editor.deleteFragment = (options) => {
    console.log('table deleteFragment', options);
    deleteFragment(options);
  };
  editor.deleteForward = (unit) => {
    // const { selection } = editor;
    console.log('删除deleteForward');
    // if (selection && SlateRange.isCollapsed(selection)) {
    //   const [cell] = Editor.nodes(editor, {
    //     match: (n) =>
    //       !Editor.isEditor(n) &&
    //       SlateElement.isElement(n) &&
    //       n.type === CustomElementType.TableCell,
    //   });
    //
    //   if (cell) {
    //     const [, cellPath] = cell;
    //     const start = Editor.start(editor, cellPath);
    //     if (SlatePoint.equals(selection.anchor, start)) {
    //       // //说明删除到头了
    //       // const preCell = Editor.previous(editor, {
    //       //   match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n),
    //       // });
    //       // if (preCell) {
    //       //   const [, preCellPath] = preCell;
    //       //   const end = Editor.end(editor, preCellPath);
    //       //   //说明前面还是有节点，focus到后面的节点
    //       //   Transforms.move(editor, { reverse: true, distance: 1 });
    //       // }
    //
    //       return;
    //     }
    //   }
    // }

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
  editor.insertBreak = () => {
    const { selection } = editor;
    if (selection) {
      const [cell] = Editor.nodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === CustomElementType.TableCell,
      });
      if (cell) {
        console.log('table-cell插入一行***********', selection);
        Transforms.insertNodes(
          editor,
          {
            type: CustomElementType.Paragraph,
            children: [
              {
                text: '',
              },
            ],
          },
          { at: selection }
        );
        Transforms.move(editor, { distance: 1 });
        return;
      }
    }

    insertBreak();
  };
  return editor;
};
const isSelectedTable = (editor: Editor, selection: BaseRange) => {
  const [cell] = Editor.nodes(editor, {
    match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n),
  });
  if (cell) {
    const [, cellPath] = cell;
    const start = Editor.start(editor, cellPath);
    if (SlatePoint.equals(selection.anchor, start)) {
      //说明已经删到头了，
      const preElement = Editor.previous(editor, {
        match: (n) =>
          !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === CustomElementType.Table,
      });
      if (preElement) {
        const [, path] = preElement;
        //并且前面是表格类型
        const range = Editor.range(editor, path);
        Transforms.setSelection(editor, range);
      }
      return true;
    }
  }
  return false;
};
export default withTable;
