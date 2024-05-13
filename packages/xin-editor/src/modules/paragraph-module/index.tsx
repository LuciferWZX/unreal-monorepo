import { CSSProperties, FC } from 'react';
import { RenderElementProps } from 'slate-react';
import { TextAlign } from '@/types';
import { ParagraphElement } from '../../../custom-slate';

const ParagraphModule: FC<RenderElementProps> = (props) => {
  const { attributes, element, children } = props;
  const { textAlign } = element as ParagraphElement;
  const _style: CSSProperties = {
    textAlign: textAlign,
  };
  return (
    <p style={_style} {...attributes}>
      {children}
    </p>
  );
};
export default ParagraphModule;
