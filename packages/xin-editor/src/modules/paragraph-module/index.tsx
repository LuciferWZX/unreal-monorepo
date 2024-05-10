import { FC } from 'react';
import { RenderElementProps } from 'slate-react';

const ParagraphModule: FC<RenderElementProps> = (props) => {
  const { attributes, children } = props;
  return <p {...attributes}>{children}</p>;
};
export default ParagraphModule;
