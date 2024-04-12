import { FC, useMemo } from 'react';
import styles from './index.module.css';
import {
  Avatar,
  cn,
  Dropdown,
  SettingsOutline,
  Space,
  Toggle,
  OptionItem,
  useTheme,
} from '@wzx-unreal/jb-design';
import AI from '@/assets/ai.svg';
import { useNavigate } from 'react-router-dom';
import { AppRouter } from '@/routers';
import { match } from 'ts-pattern';
import { NormalOptionItem } from '@wzx-unreal/jb-design/src';
const Header: FC = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const classes = cn(styles.base_header);
  const logo = useMemo(() => {
    const goWelcome = () => {
      navigate(AppRouter.welcome);
    };
    return (
      <Avatar
        onKeyDown={(e) => {
          match(e.code).with('Space' || 'Enter', () => {
            goWelcome();
          });
        }}
        onClick={goWelcome}
        alt={'ai'}
        src={AI}
        className={styles.base_header_logo}
      >
        ai
      </Avatar>
    );
  }, [navigate]);
  const settingOptions: OptionItem[] = useMemo(() => {
    const themeGroupOptions: NormalOptionItem[] = [
      {
        value: 'system',
        label: '跟随系统',
      },
      {
        value: 'dark',
        label: '暗黑',
      },
      {
        value: 'light',
        label: '亮色',
      },
    ];
    return [
      {
        type: 'group',
        value: 'theme',
        label: '主题',
        options: themeGroupOptions.map((_theme) => {
          return {
            ..._theme,
            checked: _theme.value === theme,
            onClick: (_v) => setTheme(_v as 'system' | 'dark' | 'light'),
          };
        }),
      },
      {
        type: 'separator',
      },
      {
        value: 'setting',
        label: '设置...',
      },
    ];
  }, [setTheme, theme]);
  const actionsBar = useMemo(() => {
    return (
      <Space className={cn(styles.base_header_actions)}>
        <Dropdown options={settingOptions}>
          <Toggle pressed={false}>
            <SettingsOutline />
          </Toggle>
        </Dropdown>
      </Space>
    );
  }, [settingOptions]);
  const appTitle = useMemo(() => {
    return <div className={cn(styles.base_header_title)}>AI Space</div>;
  }, []);
  return (
    <header className={classes}>
      {logo}
      {appTitle}
      {actionsBar}
    </header>
  );
};
export default Header;
