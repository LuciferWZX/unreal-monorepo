import { FC } from 'react';
import { RenderElementProps } from 'slate-react';
import { LinkElement } from '../../../custom-slate';
import { theme } from 'antd';
const LinkModule: FC<RenderElementProps> = (props) => {
  const { attributes, element, children } = props;
  const {
    token: { colorPrimaryText },
  } = theme.useToken();
  const { href, view, disabled } = element as LinkElement;
  return (
    <a
      data-link
      data-href={href}
      data-slate-node="element"
      title={href}
      style={{
        color: colorPrimaryText,
        margin: '0 2px',
      }}
      href={href}
    >
      <span {...attributes}>
        {children}
        <span
          className={'ignore-toggle-readonly'}
          data-ignore-slate
          contentEditable={false}
          style={{ userSelect: 'none' }}
        >
          {'\uFEFF'}
        </span>
      </span>
    </a>
  );
};
export default LinkModule;
