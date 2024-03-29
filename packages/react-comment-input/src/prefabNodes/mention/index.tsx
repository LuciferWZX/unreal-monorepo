import { CSSProperties, FC } from 'react';
import { RenderElementProps } from 'slate-react';
import { MentionElement } from '@/types';

const MentionNode: FC<RenderElementProps> = (props) => {
  const { attributes, element, children } = props;
  const el: MentionElement = element as any;
  const { trigger, data } = el;
  const style: CSSProperties = {
    margin: '0 1px',
    fontWeight: 'bold',
    color: '#1677ff',
    cursor: 'pointer',
  };
  return (
    <span {...attributes} contentEditable={false} style={style}>
      {trigger}
      {data?.label}
      {children}
    </span>
  );
};
export default MentionNode;
