import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.css';
import { cn } from '@wzx-unreal/jb-design';
const GlobalLayouts: FC = () => {
  return (
    <div className={cn(styles.global_layout)}>
      <Outlet />
    </div>
  );
};
export default GlobalLayouts;
