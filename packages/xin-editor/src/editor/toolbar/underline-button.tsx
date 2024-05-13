import { FC, useMemo } from 'react';
import { Button } from 'antd';
import { Underline } from 'lucide-react';
import './index.css';
import cn from 'classnames';
import { ReactEditor, useSlateSelector, useSlateStatic } from 'slate-react';
import EditorCommand from '@/core/command';

const UnderlineButton: FC = () => {
  const isUnderlineActive = useSlateSelector((editor) =>
    EditorCommand.isUnderlineMarkActive(editor)
  );
  const editor = useSlateStatic();
  const type = useMemo(() => {
    if (isUnderlineActive) {
      return 'primary';
    }
    return 'text';
  }, [isUnderlineActive]);
  return (
    <Button
      type={type}
      onClick={() => {
        ReactEditor.focus(editor);
        EditorCommand.toggleUnderlineMark(editor);
      }}
      className={cn('wu_toolbar_icon_btn')}
      icon={<Underline className={cn('wu_toolbar_icon_btn_icon')} />}
    />
  );
};
export default UnderlineButton;
