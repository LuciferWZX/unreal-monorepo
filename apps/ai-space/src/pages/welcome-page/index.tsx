import { FC } from 'react';
import { WuEditor } from '@wzx-unreal/xin-editor';
import '@wzx-unreal/xin-editor/lib/style.css';
import { useTheme } from '@wzx-unreal/jb-design';

const WelcomePage: FC = () => {
  const { theme } = useTheme();
  return (
    <div>
      <WuEditor theme={theme === 'dark' ? 'dark' : 'light'} placeholder={'请输入'} />
    </div>
  );
};
export default WelcomePage;
