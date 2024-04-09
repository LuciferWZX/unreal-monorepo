import { FC } from 'react';
import { Space } from 'antd';
import { Tree } from '@wzx-unreal/jb-design';
const TreeDemo: FC = () => {
  return (
    <div style={{ width: 500 }}>
      <Tree height={300} width={500} />
    </div>
  );
};
export default TreeDemo;
