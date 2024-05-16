import { CSSProperties, FC } from 'react';
// import { Element as SlateElement, Transforms } from 'slate';
import { RenderElementProps, useReadOnly, useSlateStatic } from 'slate-react';

import { OrderedListElement } from '../../../custom-slate';
import './index.css';
import cn from 'classnames';
import { TextAlign } from '@/types';
import { Button, theme } from 'antd';
const OrderedListModule: FC<RenderElementProps> = (props) => {
  const { attributes, children, element } = props;
  const { index, textAlign } = element as OrderedListElement;
  const editor = useSlateStatic();
  const readOnly = useReadOnly();
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const _style: CSSProperties = {
    justifyContent: textAlign
      ? textAlign === TextAlign.Center
        ? 'center'
        : `flex-${textAlign}`
      : undefined,
  };
  return (
    <div style={_style} className={'wu_ordered_list'} {...attributes}>
      <Button
        type={'text'}
        size={'small'}
        icon={
          <span contentEditable={false} style={{ color: colorPrimary }}>
            {index}.
          </span>
        }
        className={'wu_ordered_index'}
      ></Button>
      <span
        className={cn('wu_ordered_label')}
        suppressContentEditableWarning
        contentEditable={!readOnly}
      >
        {children}
      </span>
    </div>
  );
};
export default OrderedListModule;
