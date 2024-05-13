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
const Toolbar: FC = () => {
  return (
    <Space className={cn('wu_toolbar')}>
      <CheckListButton />
      <BoldButton />
      <ItalicButton />
      <UnderlineButton />
      <EraserButton />
      <TextAlignButton />
    </Space>
  );
};
export default Toolbar;
