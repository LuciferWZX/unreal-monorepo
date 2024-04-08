import { FC } from 'react';
import './demo.css';
import { Button, useTheme } from '@wzx-unreal/jb-design';

import TooltipDemo from './components/TooltipDemo.tsx';
import ScrollAreaDemo from './components/ScrollAreaDemo.tsx';
const Demo: FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={'demo'} style={{ background: theme === 'dark' ? '#000000' : '#FFFFFF' }}>
      <Button
        onClick={() => {
          if (theme === 'system') {
            setTheme('dark');
          } else {
            setTheme(theme === 'dark' ? 'light' : 'dark');
          }
        }}
      >
        切换
      </Button>
      <ScrollAreaDemo />
      <TooltipDemo />
    </div>
  );
};
export default Demo;
