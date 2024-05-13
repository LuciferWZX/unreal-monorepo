import { FC, useMemo } from 'react';
import { Button, Dropdown, MenuProps } from 'antd';
import { AlignJustify, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import './index.css';
import cn from 'classnames';
import { ReactEditor, useSlateSelector, useSlateStatic } from 'slate-react';
import EditorCommand from '@/core/command';
import { TextAlign } from '@/types';
import { match } from 'ts-pattern';

const TextAlignButton: FC = () => {
  const textAlignType = useSlateSelector((editor) => EditorCommand.isTextAlignMarkActive(editor));
  const editor = useSlateStatic();
  const type = useMemo(() => {
    if (textAlignType) {
      return 'primary';
    }
    return 'text';
  }, [textAlignType]);
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    ReactEditor.focus(editor);
    match(textAlignType === e.key)
      .with(true, () => {
        EditorCommand.toggleTextAlignMark(editor);
      })
      .otherwise(() => {
        EditorCommand.toggleTextAlignMark(editor, e.key as TextAlign);
      });
  };
  const iconClasses = cn('wu_toolbar_icon_btn_icon');
  const items: MenuProps['items'] = [
    {
      label: '左对齐',
      key: TextAlign.Start,
      icon: <AlignLeft className={iconClasses} />,
    },
    {
      label: '居中对齐',
      key: TextAlign.Center,
      icon: <AlignCenter className={iconClasses} />,
    },
    {
      label: '右对齐',
      key: TextAlign.End,
      icon: <AlignRight className={iconClasses} />,
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        selectedKeys: textAlignType ? [textAlignType as string] : [],
        onClick: handleMenuClick,
      }}
    >
      <Button
        type={type}
        className={cn('wu_toolbar_icon_btn')}
        icon={<AlignJustify className={iconClasses} />}
      />
    </Dropdown>
  );
};
export default TextAlignButton;
