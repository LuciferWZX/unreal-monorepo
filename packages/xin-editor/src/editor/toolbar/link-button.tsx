import { FC, useMemo } from 'react';
import { Button } from 'antd';
import { Link2 } from 'lucide-react';
import './index.css';
import cn from 'classnames';
import { ReactEditor, useSlateSelector, useSlateStatic } from 'slate-react';
import EditorCommand from '@/core/command';
import LinkFormTooltip, { LinkFormType } from '@/editor/toolbar-form/link-form-tooltip';
import { isSameNode } from '@/core/node-helper';
import { getSelectionText } from '@/core/selection-helper';
import { delLinks } from '@/core';
import { Editor } from 'slate';
import { useBoolean } from '@wzx-unreal/react-hooks';

const LinkButton: FC = () => {
  const { isLinkActive, disabled, selectedText } = useSlateSelector((editor) => {
    return {
      selectedText: getSelectionText(editor),
      disabled: !isSameNode(editor),
      isLinkActive: EditorCommand.isLinkMarkActive(editor),
    };
  });
  const [open, { set: setOpen }] = useBoolean(false);
  const editor = useSlateStatic();
  const defaultValue: Partial<LinkFormType> | undefined = useMemo(() => {
    if (selectedText) {
      return {
        title: selectedText,
      };
    }
    return undefined;
  }, [selectedText]);
  const type = useMemo(() => {
    if (isLinkActive) {
      return 'primary';
    }
    return 'text';
  }, [isLinkActive]);
  return (
    <LinkFormTooltip
      open={open}
      setOpen={setOpen}
      defaultValue={defaultValue}
      disabled={isLinkActive}
    >
      <Button
        disabled={disabled}
        type={type}
        onClick={(e) => {
          if (isLinkActive) {
            e.stopPropagation();
            ReactEditor.focus(editor);
            EditorCommand.toggleLinkNode(editor);
          } else {
            setOpen(true);
          }
        }}
        className={cn('wu_toolbar_icon_btn')}
        icon={<Link2 className={cn('wu_toolbar_icon_btn_icon')} />}
      />
    </LinkFormTooltip>
  );
};
export default LinkButton;
