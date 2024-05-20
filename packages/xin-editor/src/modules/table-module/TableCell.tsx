import { FC } from 'react';
import { RenderElementProps } from 'slate-react';
import cn from 'classnames';
import './index.css';
const TableCell: FC<RenderElementProps> = (props) => {
  const { attributes, children } = props;
  return (
    <td className={cn('wu_table_border')} {...attributes}>
      {children}
    </td>
  );
};
export default TableCell;
