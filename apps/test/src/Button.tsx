import { Button, useTheme, Alert } from '@wzx-unreal/jb-design';
import { useState } from 'react';

const ButtonPage = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div
      style={{
        padding: 20,
        background: theme === 'dark' ? '#000' : '#fff',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Button
        onClick={() => {
          if (theme === 'system') {
            console.log(111);
            setTheme('dark');
          } else {
            setTheme(theme === 'dark' ? 'light' : 'dark');
          }
        }}
      >
        切换
      </Button>
      <div style={{ margin: '40px 0' }}></div>
      <div>
        <Button style={{ marginRight: '10px' }}>Button</Button>
        <Button disabled={true}>disabled</Button>
      </div>
      <div style={{ margin: '40px 0' }}>
        <Button type={'primary'} style={{ marginRight: '10px' }}>
          Primary
        </Button>
        <Button type={'primary'} disabled={true}>
          disabled
        </Button>
      </div>
      <div style={{ margin: '40px 0' }}>
        <Button type={'slim'} style={{ marginRight: '10px' }}>
          slim
        </Button>
        <Button type={'slim'} disabled={true}>
          disabled
        </Button>
      </div>
      <div style={{ margin: '40px 0' }}>
        <Button.Split style={{ marginRight: '10px' }}>Split</Button.Split>
        <Button.Split disabled={true}>disabled</Button.Split>
      </div>
      <div style={{ margin: '40px 0' }}>
        <Button.Split
          onClick={() => {
            alert('primary Split');
          }}
          onIconClick={(e) => {
            e.stopPropagation();
            alert('icon');
          }}
          type={'primary'}
          style={{ marginRight: '10px' }}
        >
          primary Split
        </Button.Split>
        <Button.Split
          onClick={() => {
            alert('primary Split');
          }}
          onIconClick={(e) => {
            e.stopPropagation();
            alert('icon');
          }}
          suffix={<div>确认</div>}
          type={'primary'}
          style={{ marginRight: '10px' }}
        >
          确认
        </Button.Split>
        <Button.Split type={'primary'} disabled={true}>
          disabled
        </Button.Split>
      </div>
      <div style={{ margin: '40px 0' }}>
        <Button onClick={() => setOpen(true)}>打开</Button>
        <Alert title={'我是弹出'} visible={open} onClose={() => setOpen(false)}>
          我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        </Alert>
      </div>
    </div>
  );
};
export default ButtonPage;
