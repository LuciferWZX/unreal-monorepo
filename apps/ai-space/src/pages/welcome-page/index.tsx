import { FC } from 'react';
import { WuEditor } from '@wzx-unreal/xin-editor';
import '@wzx-unreal/xin-editor/lib/style.css';

const WelcomePage: FC = () => {
  return (
    <div>
      <WuEditor placeholder={'请输入'} />
    </div>
  );
};
export default WelcomePage;
