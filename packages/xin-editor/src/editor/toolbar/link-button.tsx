import { FC, useMemo } from 'react';
import { Button } from 'antd';
import { Bold, Link2 } from 'lucide-react';
import './index.css';
import cn from 'classnames';
import { ReactEditor, useSlateSelector, useSlateStatic } from 'slate-react';
import EditorCommand from '@/core/command';
import LinkFormTooltip from '@/editor/toolbar-form/link-form-tooltip';

const LinkButton: FC = () => {
  const isBoldActive = useSlateSelector((editor) => EditorCommand.isBoldMarkActive(editor));
  const editor = useSlateStatic();
  const type = useMemo(() => {
    if (isBoldActive) {
      return 'primary';
    }
    return 'text';
  }, [isBoldActive]);
  return (
    <LinkFormTooltip>
      <Button
        type={type}
        // onClick={() => {
        //   ReactEditor.focus(editor);
        //   EditorCommand.toggleBoldMark(editor);
        // }}
        className={cn('wu_toolbar_icon_btn')}
        icon={<Link2 className={cn('wu_toolbar_icon_btn_icon')} />}
      />
    </LinkFormTooltip>
  );
};
export default LinkButton;
