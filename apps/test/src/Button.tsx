import { Button, useTheme, Alert, Input, Link } from '@wzx-unreal/jb-design';
import { useState } from 'react';

const ButtonPage = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      style={{
        padding: 20,
        background: theme === 'dark' ? '#2B2D30' : '#fff',
        width: '100vw',
        height: '100vh',
      }}
    >
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
      <div style={{ margin: '40px 0' }}></div>
      <div>
        <Link
          onClick={() => {
            console.log(1);
          }}
          suffix={[{ type: 'arrow-top-right', key: '1' }]}
          style={{ marginRight: '30px' }}
        >
          Link to the web
        </Link>
        <Link
          onClick={() => {
            console.log(2);
          }}
          style={{ marginRight: '30px' }}
        >
          Link with options
        </Link>
        <Link
          onClick={() => {
            console.log(3);
          }}
          suffix={[{ type: 'arrow-top-right', key: '1' }]}
          disabled={true}
        >
          disabled
        </Link>
      </div>
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
        <Alert type={'question'} title={'我是弹出'} open={open} onClose={() => setOpen(false)}>
          我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
        </Alert>
      </div>
      <div style={{ margin: '40px 0' }}>
        <Input placeholder={'请输入'} style={{ marginRight: '10px' }} />
        <Input placeholder={'error'} aria-invalid={'true'} style={{ marginRight: '10px' }} />
        <Input
          value={'this is disabled'}
          placeholder={'请输入'}
          disabled={true}
          style={{ marginRight: '10px' }}
        />
        <Input
          placeholder={'error'}
          aria-invalid={'true'}
          value={'this is disabled error'}
          disabled={true}
          style={{ marginRight: '10px' }}
        />
        <Input
          suffix={[
            {
              type: 'folder',
              disabled: true,
              key: '1',
              onClick: () => {
                console.log(1);
              },
            },
            {
              type: 'folder',
              key: '2',
              onClick: () => {
                console.log(2);
              },
            },
          ]}
          placeholder={'请输入'}
          style={{ marginRight: '10px' }}
        />
        <Input
          disabled={true}
          suffix={[
            {
              type: 'folder',
              key: '1',
              onClick: () => {
                console.log(1);
              },
            },
            {
              type: 'expand',
              key: '2',
              onClick: () => {
                console.log(2);
              },
            },
          ]}
          value={'disabled value'}
          placeholder={'请输入'}
          style={{ marginRight: '10px' }}
        />
        <Input
          suffix={[
            {
              type: 'folder',
              key: '1',
              onClick: () => {
                console.log(1);
              },
            },
            {
              type: 'expand',
              key: '2',
              onClick: () => {
                console.log(2);
              },
            },
          ]}
          placeholder={'请输入'}
          style={{ marginRight: '10px' }}
          aria-invalid={'true'}
        />
        <Input
          block={true}
          suffix={[
            {
              type: 'folder',
              disabled: true,
              key: '1',
              onClick: () => {
                console.log(1);
              },
            },
            {
              type: 'folder',
              key: '2',
              onClick: () => {
                console.log(2);
              },
            },
          ]}
          placeholder={'请输入'}
          style={{ marginRight: '10px' }}
        />
      </div>
    </div>
  );
};
export default ButtonPage;
