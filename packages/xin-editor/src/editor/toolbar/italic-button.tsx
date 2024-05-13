import { FC, useMemo } from 'react';
import { Button } from 'antd';
import { Italic } from 'lucide-react';
import './index.css';
import cn from 'classnames';
import { ReactEditor, useSlateSelector, useSlateStatic } from 'slate-react';
import EditorCommand from '@/core/command';

const ItalicButton: FC = () => {
  const isItalicActive = useSlateSelector((editor) => EditorCommand.isItalicMarkActive(editor));
  const editor = useSlateStatic();
  const type = useMemo(() => {
    if (isItalicActive) {
      return 'primary';
    }
    return 'text';
  }, [isItalicActive]);
  return (
    <Button
      type={type}
      onClick={() => {
        ReactEditor.focus(editor);
        EditorCommand.toggleItalicMark(editor);
      }}
      className={cn('wu_toolbar_icon_btn')}
      icon={<Italic className={cn('wu_toolbar_icon_btn_icon')} />}
    />
  );
};
export default ItalicButton;
