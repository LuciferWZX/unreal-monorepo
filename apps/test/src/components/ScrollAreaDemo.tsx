import { FC } from 'react';
import { Space } from 'antd';
import { ScrollArea } from '@wzx-unreal/jb-design';
const ScrollAreaDemo: FC = () => {
  return (
    <div>
      <Space size={280} wrap={true}>
        <ScrollArea
          style={{
            border: '1px solid orange',
            width: 200,
            height: 200,
            padding: 10,
          }}
        >
          <div style={{ border: '1px solid grey', height: 500 }}></div>
        </ScrollArea>
      </Space>
    </div>
  );
};
export default ScrollAreaDemo;
