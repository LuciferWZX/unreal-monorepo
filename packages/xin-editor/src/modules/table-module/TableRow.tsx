import { FC } from 'react';
import { RenderElementProps } from 'slate-react';

const TableRow: FC<RenderElementProps> = (props) => {
  const { attributes, children } = props;
  return <tr {...attributes}>{children}</tr>;
};
export default TableRow;
