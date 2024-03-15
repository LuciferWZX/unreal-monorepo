import { FC, useState } from 'react';
import { Button, Toaster, useToast, RadioGroup, RadioProps } from '@wzx-unreal/unreal-design';
import { Space } from '@arco-design/web-react';
import { IconEmail } from '@arco-design/web-react/icon';

const RadioGroupPage: FC = () => {
  const { toast } = useToast();
  const [value, setValue] = useState<string>('');
  const options: RadioProps[] = [
    {
      value: 'elephant',
      label: '大象',
      indicator: {
        children: '🐘',
      },
    },
    {
      value: 'lion',
      label: '狮子',
      indicator: {
        children: <IconEmail />,
      },
    },
    {
      value: 'butterfly',
      label: '蝴蝶',
      disabled: true,
    },
    {
      value: 'cockroach',
      label: '瓢虫',
      indicator: {
        children: '🪳',
      },
    },
  ];
  const send = () => {
    const data = toast({
      title: 'Scheduled: Catch up ',
      description: 'Friday, February 10, 2023 at 5:57 PM',
    });
  };
  return (
    <div style={{ flex: 1, padding: 20 }}>
      <Space>
        default
        <RadioGroup options={options} />
        <RadioGroup direction="horizontal" options={options} />
      </Space>
    </div>
  );
};
export default RadioGroupPage;
