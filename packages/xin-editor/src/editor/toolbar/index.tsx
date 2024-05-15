import { FC } from 'react';
import { Space } from 'antd';

import './index.css';
import cn from 'classnames';
import BoldButton from './bold-button';
import ItalicButton from './italic-button';
import UnderlineButton from './underline-button';
import EraserButton from './eraser-button';
import TextAlignButton from './text-align-button';
import CheckListButton from './check-list-button';
import TextHeadingButton from './text-heading-button';
import OrderedListButton from '@/editor/toolbar/ordered-list-button';
import HighlightInput from '@/editor/toolbar/highlight-input';
interface ToolbarProps {
  className?: string;
}
const Toolbar: FC<ToolbarProps> = (props) => {
  const { className } = props;
  return (
    <Space className={cn('wu_toolbar', className)}>
      <HighlightInput />
      <TextHeadingButton />
      <CheckListButton />
      <BoldButton />
      <ItalicButton />
      <UnderlineButton />
      <EraserButton />
      <TextAlignButton />
      <OrderedListButton />
    </Space>
  );
};
export default Toolbar;
