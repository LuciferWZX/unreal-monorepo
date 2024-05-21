import { FC } from 'react';
import { ReactEditor, RenderElementProps, useSlateSelector } from 'slate-react';
import cn from 'classnames';
import './index.css';
import {
  Editor,
  Node as SlateNode,
  Range as SlateRange,
  Point as SlatePoint,
  Path as SlatePath,
} from 'slate';
const TableCell: FC<RenderElementProps> = (props) => {
  const { attributes, element, children } = props;
  const isSelected = useSlateSelector((editor) => isInRange(editor, element));
  const classes = cn('wu_table_border', {
    wu_table_cell_cross: isSelected,
  });
  return (
    <td style={{ width: 100 }} className={classes} {...attributes}>
      {children}
    </td>
  );
};
const isInRange = (editor: Editor, node: SlateNode) => {
  const { selection } = editor;
  if (selection && SlateRange.isRange(selection)) {
    const [start, end] = SlateRange.edges(selection);
    const cellPath = ReactEditor.findPath(editor, node);

    const cellStart = Editor.start(editor, cellPath);
    const cellEnd = Editor.end(editor, cellPath);
    const nodes = SlateNode.fragment(editor, selection);
    if (nodes.length > 1) {
      //说明选区也包括其他的外部节点，此时应该全部选中
      return true;
    }
    if (SlatePoint.isAfter(cellEnd, start) && SlatePoint.isBefore(cellStart, end)) {
      return isCrossNode(cellPath, start.path, end.path);
    }
  }

  return false;
};
const isCrossNode = (parentPath: SlatePath, startPath: SlatePath, endPath: SlatePath) => {
  let isCross = false;
  for (let i = 0; i < parentPath.length; i++) {
    if (startPath[i] !== parentPath[i] || endPath[i] !== parentPath[i]) {
      isCross = true;
    }
  }
  return isCross;
};
export default TableCell;
