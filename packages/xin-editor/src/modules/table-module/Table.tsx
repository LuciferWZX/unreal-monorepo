import { FC, useCallback, useEffect, useState } from 'react';
import { ReactEditor, RenderElementProps, useSlateStatic } from 'slate-react';
import cn from 'classnames';
import './index.css';
const Table: FC<RenderElementProps> = (props) => {
  const { attributes, children } = props;
  const editor = useSlateStatic();
  // const handleTableCellsMouseMove = useCallback(
  //   (e: React.MouseEvent<HTMLTableElement>) => {
  //     if (pressed) {
  //       e.preventDefault();
  //       e.stopPropagation();
  //       const cell = (e.target as HTMLBaseElement).closest('td');
  //       console.log(111, cell);
  //       if (cell) {
  //         const tdSlateNode = ReactEditor.toSlateNode(editor, cell);
  //         console.log(222, tdSlateNode);
  //       }
  //     }
  //   },
  //   [editor?.selection]
  // );
  return (
    <table className={cn('wu_table', 'wu_table_border')}>
      <tbody {...attributes}>{children}</tbody>
    </table>
  );
};
export default Table;
