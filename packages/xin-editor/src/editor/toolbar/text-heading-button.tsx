import { FC, useMemo } from 'react';
import { Button, Dropdown, MenuProps } from 'antd';
import {
  AlignJustify,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading,
} from 'lucide-react';
import './index.css';
import cn from 'classnames';
import { ReactEditor, useSlateSelector, useSlateStatic } from 'slate-react';
import EditorCommand from '@/core/command';
import { TextHeading } from '@/types';
import { match } from 'ts-pattern';

const TextHeadingButton: FC = () => {
  const textHeadingType = useSlateSelector((editor) =>
    EditorCommand.isTextHeadingMarkActive(editor)
  );
  const editor = useSlateStatic();
  const type = useMemo(() => {
    if (textHeadingType) {
      return 'primary';
    }
    return 'text';
  }, [textHeadingType]);
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    ReactEditor.focus(editor);
    match(textHeadingType?.toString() === e.key)
      .with(true, () => {
        EditorCommand.toggleTextHeadingMark(editor);
      })
      .otherwise(() => {
        EditorCommand.toggleTextHeadingMark(editor, Number(e.key) as TextHeading);
      });
  };
  const iconClasses = cn('wu_toolbar_icon_btn_icon');
  const items: MenuProps['items'] = [
    {
      label: '一级标题',
      key: TextHeading.H1.toString(),
      icon: <Heading1 className={iconClasses} />,
    },
    {
      label: '二级标题',
      key: TextHeading.H2.toString(),
      icon: <Heading2 className={iconClasses} />,
    },
    {
      label: '三级标题',
      key: TextHeading.H3.toString(),
      icon: <Heading3 className={iconClasses} />,
    },
    {
      label: '四级标题',
      key: TextHeading.H4.toString(),
      icon: <Heading4 className={iconClasses} />,
    },
    {
      label: '五级标题',
      key: TextHeading.H5.toString(),
      icon: <Heading5 className={iconClasses} />,
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        selectedKeys: textHeadingType ? [textHeadingType.toString()] : [],
        onClick: handleMenuClick,
      }}
    >
      <Button
        type={type}
        className={cn('wu_toolbar_icon_btn')}
        icon={<Heading className={iconClasses} />}
      />
    </Dropdown>
  );
};
export default TextHeadingButton;
