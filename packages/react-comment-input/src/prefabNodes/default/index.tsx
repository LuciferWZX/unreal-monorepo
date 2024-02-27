import { FC } from 'react';
import { RenderElementProps } from 'slate-react';

const DefaultElement: FC<RenderElementProps> = (props) => {
  return <div {...props.attributes}>{props.children}</div>;
};
export default DefaultElement;
