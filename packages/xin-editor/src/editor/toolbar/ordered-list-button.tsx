import { FC, useMemo } from 'react';
import { Button } from 'antd';
import { ListOrdered, ListTodo } from 'lucide-react';
import './index.css';
import cn from 'classnames';
import { ReactEditor, useSlateSelector, useSlateStatic } from 'slate-react';
import EditorCommand from '@/core/command';
const OrderedListButton: FC = () => {
  const isOrderedListNode = useSlateSelector((editor) => EditorCommand.isOrderedListNode(editor));
  const editor = useSlateStatic();
  const type = useMemo(() => {
    if (isOrderedListNode) {
      return 'primary';
    }
    return 'text';
  }, [isOrderedListNode]);
  return (
    <Button
      type={type}
      className={cn('wu_toolbar_icon_btn')}
      onClick={() => {
        ReactEditor.focus(editor);
        EditorCommand.toggleOrderedListNode(editor);
      }}
      icon={<ListOrdered className={cn('wu_toolbar_icon_btn_icon')} />}
    />
  );
};
export default OrderedListButton;
