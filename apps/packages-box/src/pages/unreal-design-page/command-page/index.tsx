import { FC } from 'react';
import { Button, UnrealCommand } from '@wzx-unreal/unreal-design';
import { CommandOptionType } from '@wzx-unreal/unreal-design/src';
import { IconAlignCenter, IconEmail, IconQq, IconSkipPrevious } from '@arco-design/web-react/icon';
import { useBoolean } from '@wzx-unreal/react-hooks';
import { Space } from '@arco-design/web-react';

const CommandPage: FC = () => {
  const [open, { toggle, set }] = useBoolean(false);
  const [loading, { set: setLoading }] = useBoolean(false);
  const options: CommandOptionType[] = [
    {
      heading: 'Suggestions',
      children: [
        {
          label: 'Calendar',
          value: 'calendar',
          icon: <IconAlignCenter />,
          commandShortcut: 'Ctrl + C',
          onSelect: (value) => {
            console.log(111, value);
          },
        },
        {
          label: 'Launch',
          value: 'launch',
          disabled: true,
          keywords: ['sky', 'roket'],
          onSelect: (value) => {
            console.log(2222, value);
          },
          icon: <IconQq />,
        },
      ],
    },
    {
      type: 'separator',
    },
    {
      heading: 'Settings',
      children: [
        {
          label: 'Profile',
          value: 'profile',
          icon: <IconSkipPrevious />,
        },
        {
          label: 'Mail',
          value: 'mail',
          icon: <IconEmail />,
        },
      ],
    },
  ];
  return (
    <div style={{ flex: 1, padding: 20 }}>
      <Space>
        <UnrealCommand options={options} placeholder={'Type a command or search...'} />
        <Button onClick={() => toggle()}>open</Button>
        <UnrealCommand
          dialog={true}
          inputProps={{
            onValueChange: () => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 1000);
            },
          }}
          dialogProps={{
            open,
            onOpenChange: set,
          }}
          options={options}
          loadingProps={{
            loading,
          }}
          placeholder={'dialog...'}
        />
      </Space>
    </div>
  );
};
export default CommandPage;
