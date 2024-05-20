import { FC } from 'react';
import { RenderElementProps } from 'slate-react';
import cn from 'classnames';
import './index.css';
const Table: FC<RenderElementProps> = (props) => {
  const { attributes, children } = props;
  return (
    <table className={cn('wu_table', 'wu_table_border')}>
      <tbody {...attributes}>{children}</tbody>
    </table>
  );
};
export default Table;
