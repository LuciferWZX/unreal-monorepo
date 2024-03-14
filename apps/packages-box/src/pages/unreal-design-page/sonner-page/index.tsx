import { FC, useState } from 'react';
import { Button, Input, Sonner, sonner } from '@wzx-unreal/unreal-design';
import { Space } from '@arco-design/web-react';

const SonnerPage: FC = () => {
  const [value, setValue] = useState<string>('');
  const send = (type: 'success' | 'message') => {
    sonner[type ?? 'message']('收到一条消息', {
      description: value,
      action: {
        label: '查看',
        onClick: () => {
          console.log('点击了查看');
        },
      },
    });
  };
  return (
    <div style={{ flex: 1, padding: 20 }}>
      <Space>
        <Input value={value} onChange={setValue} placeholder={'请输入'} />
        <Button onClick={() => send('message')} variant={'outline'}>
          发送
        </Button>
        <Button onClick={() => send('success')} variant={'outline'}>
          success
        </Button>
      </Space>
      <Sonner richColors={true} />
    </div>
  );
};
export default SonnerPage;
