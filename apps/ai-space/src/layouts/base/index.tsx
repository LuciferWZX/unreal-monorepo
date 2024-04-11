import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.css';
import { cn } from '@wzx-unreal/jb-design';
import Header from './header';
import Sider from './sider';
import { Content } from '@/components';
const BaseLayout: FC = () => {
  const classes = cn(styles.base_layout);
  return (
    <div className={classes}>
      <Header />
      <Content className={cn(styles.base_layout_content)}>
        <Sider />
        <Content className={cn(styles.base_layout_content_with_sider)}>
          <Outlet />
        </Content>
      </Content>
    </div>
  );
};
export default BaseLayout;
