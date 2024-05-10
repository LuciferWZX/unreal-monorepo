import { FC } from 'react';
import { RenderElementProps } from 'slate-react';

const BoldModule: FC<RenderElementProps> = (props) => {
  const { attributes, children } = props;
  return <span {...attributes}>{children}</span>;
};
export default BoldModule;
