import { CSSProperties, FC } from 'react';
import { Element as SlateElement, Transforms } from 'slate';
import { ReactEditor, RenderElementProps, useReadOnly, useSlateStatic } from 'slate-react';
import { Checkbox } from 'antd';
import { CheckListElement } from '../../../custom-slate';
import './index.css';
import cn from 'classnames';
const CheckListModule: FC<RenderElementProps> = (props) => {
  const { attributes, children, element } = props;
  const { disabled, checked, textAlign } = element as CheckListElement;
  const editor = useSlateStatic();
  const readOnly = useReadOnly();
  const mergedDisabled = readOnly || disabled;
  const classes = cn('wu_check_list');
  const _style: CSSProperties = {
    justifyContent: `flex-${textAlign}`,
  };
  return (
    <div className={classes} style={_style} {...attributes}>
      <span contentEditable={false} className={'wu_check_list_box'}>
        <Checkbox
          disabled={mergedDisabled}
          checked={checked}
          onChange={(evt) => {
            //是一个用于查找指定元素（element）在编辑器中的路径（path）的方法。这个方法通常在处理编辑器中的特定元素时被使用。
            const path = ReactEditor.findPath(editor, element);
            const newProperties: Partial<SlateElement> = {
              checked: evt.target.checked,
            };
            Transforms.setNodes(editor, newProperties, { at: path });
          }}
        />
      </span>
      <span
        className={cn('wu_check_list_label', {
          wu_check_list_checked: checked,
        })}
        suppressContentEditableWarning
        contentEditable={!readOnly}
      >
        {children}
      </span>
    </div>
  );
};
export default CheckListModule;
