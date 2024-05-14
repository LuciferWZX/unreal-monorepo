import { CSSProperties, FC } from 'react';
import { RenderElementProps } from 'slate-react';
import { Typography } from 'antd';
import { ParagraphElement } from '../../../custom-slate';
const ParagraphModule: FC<RenderElementProps> = (props) => {
  const { attributes, element, children } = props;
  const { textAlign, heading } = element as ParagraphElement;
  const _style: CSSProperties = {
    textAlign: textAlign,
  };
  if (heading) {
    return (
      <Typography.Title level={heading} style={_style} {...attributes}>
        {children}
      </Typography.Title>
    );
  }
  return (
    <p style={_style} {...attributes}>
      {children}
    </p>
  );
};
export default ParagraphModule;
