import { FC, useState } from 'react';
import { Button, Input, Toaster, useToast, ToastAction } from '@wzx-unreal/unreal-design';
import { Space } from '@arco-design/web-react';

const ToastPage: FC = () => {
  const { toast } = useToast();
  const [value, setValue] = useState<string>('');
  const send = () => {
    toast({
      title: 'Scheduled: Catch up ',
      description: 'Friday, February 10, 2023 at 5:57 PM',
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  };
  return (
    <div style={{ flex: 1, padding: 20 }}>
      <Space>
        <Input value={value} onChange={setValue} placeholder={'请输入'} />
        <Button onClick={send} variant={'outline'}>
          发送
        </Button>
        <Button
          onClick={() => {
            toast({
              description: 'Your message has been sent.',
            });
          }}
          variant={'outline'}
        >
          default
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: 'Uh oh! Something went wrong.',
              description: 'There was a problem with your request.',
            });
          }}
        >
          With title
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: 'Uh oh! Something went wrong.',
              description: 'There was a problem with your request.',
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          With Action
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              variant: 'destructive',
              title: 'Uh oh! Something went wrong.',
              description: 'There was a problem with your request.',
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Destructive
        </Button>
      </Space>
      <Toaster />
    </div>
  );
};
export default ToastPage;
