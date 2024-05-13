import { FC, useMemo } from 'react';
import { Button, Dropdown, MenuProps } from 'antd';
import { AlignJustify, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import './index.css';
import cn from 'classnames';
import { ReactEditor, useSlateSelector, useSlateStatic } from 'slate-react';
import EditorCommand from '@/core/command';

const TextAlignButton: FC = () => {
  const isBoldActive = useSlateSelector((editor) => EditorCommand.isBoldMarkActive(editor));
  const editor = useSlateStatic();
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
  };
  const iconClasses = cn('wu_toolbar_icon_btn_icon');
  const items: MenuProps['items'] = [
    {
      label: '左对齐',
      key: 'align-left',
      icon: <AlignLeft className={iconClasses} />,
    },
    {
      label: '居中对齐',
      key: 'align-center',
      icon: <AlignCenter className={iconClasses} />,
    },
    {
      label: '右对齐',
      key: 'align-right',
      icon: <AlignRight className={iconClasses} />,
    },
  ];
  return (
    <Dropdown.Button
      type={'text'}
      className={cn('wu_toolbar_icon_btn')}
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      buttonsRender={(buttons) => {
        const dropdownButton = buttons[1];
        return [
          <Button
            type={'text'}
            onClick={() => {
              ReactEditor.focus(editor);
              EditorCommand.toggleBoldMark(editor);
            }}
            className={cn('wu_toolbar_icon_btn')}
            icon={<AlignJustify className={iconClasses} />}
          />,
          dropdownButton,
        ];
      }}
    ></Dropdown.Button>
  );
};
export default TextAlignButton;
