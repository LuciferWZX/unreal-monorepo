import { FC } from 'react';
// import { Element as SlateElement, Transforms } from 'slate';
import { RenderElementProps, useReadOnly, useSlateStatic } from 'slate-react';

import { OrderedListElement } from '../../../custom-slate';
import './index.css';
import cn from 'classnames';
const OrderedListModule: FC<RenderElementProps> = (props) => {
  const { attributes, children, element } = props;
  const { index } = element as OrderedListElement;
  const editor = useSlateStatic();
  const readOnly = useReadOnly();
  return (
    <div className={'wu_ordered_list'} {...attributes}>
      <span contentEditable={false} className={'wu_ordered_index'}>
        {index}.
      </span>
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
