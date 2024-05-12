import { FC } from 'react';
import {  Space } from 'antd';
import CheckListButton from '@/editor/toolbar/check-list-button';
import './index.css'
import cn from 'classnames';
import BoldButton from '@/editor/toolbar/bold-button';

const Toolbar:FC=()=>{
  return(
    <Space className={cn('wu_toolbar')}>
      <CheckListButton/>
      <BoldButton/>
    </Space>
  )
}
export default Toolbar
