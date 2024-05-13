import { FC, useMemo } from 'react';
import { Button } from 'antd';
import { Bold, Eraser } from 'lucide-react';
import './index.css';
import cn from 'classnames';
import { ReactEditor, useSlateSelector, useSlateStatic } from 'slate-react';
import EditorCommand from '@/core/command';

const EraserButton: FC = () => {
  const editor = useSlateStatic();

  return (
    <Button
      type={'text'}
      onClick={() => {
        ReactEditor.focus(editor);
        EditorCommand.restoreNormal(editor);
      }}
      className={cn('wu_toolbar_icon_btn')}
      icon={<Eraser className={cn('wu_toolbar_icon_btn_icon')} />}
    />
  );
};
export default EraserButton;
