import { FC, ReactNode, useState } from 'react';
import styles from './index.module.css';
import { WorkflowOutline } from '@/components';
import {ToggleGroup, MoreHorizontal, Tooltip} from '@wzx-unreal/jb-design';
import ToggleButton from '../../../components/toggleButton';
import { AppRouter } from '@/routers';
import { match } from 'ts-pattern';
import { useNavigate } from 'react-router-dom';
interface MenuItemProps {
  key: string;
  icon?: ReactNode;
  tooltip?: string;
}
const Sider: FC = () => {
  const [activeKey, setActiveKey] = useState<string>('');
  const navigate = useNavigate();
  const [menus] = useState<MenuItemProps[]>([
    {
      key: AppRouter.workflow,
      icon: <WorkflowOutline />,
        tooltip: '工作流'
    },
    {
      key: 'more',
      icon: <MoreHorizontal />,
        tooltip: '更多'
    },
  ]);
  return (
    <aside className={styles.base_sider}>
      <ToggleGroup
        type={'single'}
        value={activeKey}
        onValueChange={(value) => {
          match(value)
            .with('more', () => {})
            .with('', () => {})
            .otherwise((_key) => {
              setActiveKey(_key);
              navigate(_key);
            });
        }}
      >
        {menus.map((menu) => {
          return match(menu.key)
              .with('more', () => {
                  return (
                      <Tooltip placement={"right"} key={menu.key} title={menu.tooltip}>
                          <>
                              <ToggleButton  className={styles.base_sider_item} value={menu.key}>
                                  {menu.icon}
                              </ToggleButton>
                          </>
                      </Tooltip>
                  )
              })
              .otherwise(()=>{
                  return (
                      <Tooltip placement={"right"} key={menu.key} title={menu.tooltip}>
                          <>
                              <ToggleButton  className={styles.base_sider_item} value={menu.key}>
                                  {menu.icon}
                              </ToggleButton>
                          </>
                      </Tooltip>
                  );
              })

        })}
      </ToggleGroup>
    </aside>
  );
};
export default Sider;
