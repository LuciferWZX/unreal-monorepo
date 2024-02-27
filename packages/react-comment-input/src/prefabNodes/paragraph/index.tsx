import { FC } from 'react';
import { RenderElementProps } from 'slate-react';

const ParagraphElement: FC<RenderElementProps> = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};
export default ParagraphElement;
