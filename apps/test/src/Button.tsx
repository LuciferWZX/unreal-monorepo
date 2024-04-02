import { Button, useTheme, Alert, Input, Link, Checkbox, ContextMenu } from '@wzx-unreal/jb-design';
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
        overflow: 'auto',
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
      <div style={{ margin: '40px 0' }}>
        <ContextMenu>
          <div
            style={{
              border: '1px solid grey',
              height: 200,
              width: 200,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Right Click Space
          </div>
        </ContextMenu>
      </div>
      <div style={{ margin: '40px 0' }}>
        <Checkbox style={{ marginRight: 20 }}>checkBox</Checkbox>
        <Checkbox style={{ marginRight: 20 }}>checkBox2</Checkbox>
        <Checkbox style={{ marginRight: 20 }} checked={true} disabled={true}>
          disabled checked
        </Checkbox>
        <Checkbox disabled={true} aria-invalid={'true'} style={{ marginRight: 20 }}>
          invalid
        </Checkbox>
        <Checkbox disabled={true} aria-invalid={'true'} checked={true} style={{ marginRight: 20 }}>
          invalid
        </Checkbox>
        <Checkbox style={{ marginRight: 20 }} indeterminate={true}>
          indeterminate
        </Checkbox>
      </div>
      <div style={{ margin: '40px 0' }}>
        <Checkbox.Group onChange={(v) => console.log(v)}>
          <Checkbox disabled={true} value={'a'}>
            A
          </Checkbox>
          <Checkbox value={'b'}>
            B<span style={{ color: 'grey' }}>你好</span>
          </Checkbox>
          <Checkbox value={'c'}>C</Checkbox>
          <Checkbox value={'d'}>D</Checkbox>
        </Checkbox.Group>
        <Checkbox.Group direction={'vertical'} onChange={(v) => console.log(v)}>
          <Checkbox disabled={true} value={'a'}>
            A
          </Checkbox>
          <Checkbox value={'b'}>B</Checkbox>
          <Checkbox value={'c'}>C</Checkbox>
          <Checkbox value={'d'}>D</Checkbox>
        </Checkbox.Group>
      </div>
      <div style={{ margin: '40px 0' }}></div>
      <div>
        <Link
          href="https://www.baidu.com"
          onClick={() => {
            console.log(1);
          }}
          suffix={[{ type: 'arrow-top-right', key: '1' }]}
          style={{ marginRight: '30px' }}
        >
          Link to the web
        </Link>
        <Link
          href="https://www.baidu.com"
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
