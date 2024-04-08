import {
  Button,
  useTheme,
  Alert,
  Input,
  Link,
  Checkbox,
  ContextMenu,
  IdeaOutline,
  PasteOutline,
  Tooltip,
  Select,
} from '@wzx-unreal/jb-design';
import { useState } from 'react';

const ButtonPage = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      style={{
        padding: 20,
        background: theme === 'dark' ? '#000000' : '#FFFFFF',
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
        <Select
          style={{ marginRight: 20, width: 120 }}
          placeholder={'请选择'}
          defaultValue={'Dark'}
          options={[
            { value: 'Light', label: 'Light' },
            { value: 'Dark', label: 'Dark', disabled: true },
            { type: 'separator' },
            {
              type: 'sub',
              value: 'lucy',
              label: 'Lucy',
              disabled: true,
              options: [
                { value: 'lucy', label: 'Lucy' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ],
            },
            {
              type: 'group',
              label: 'Group',
              value: 'group',
              disabled: true,
              options: [
                {
                  type: 'sub',
                  value: 'sub',
                  label: 'sub',
                  options: [
                    { value: 'lucy1', label: 'Lucy1' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                  ],
                },
              ],
            },
            { value: 'Yiminghe', label: 'yiminghexxaaaaaasyiminghexxaaaaaas' },
            { value: 'disabled2', label: 'Disabled2', disabled: true },
          ]}
        />
        <Select
          placeholder={'请选择'}
          mode={'multiple'}
          options={[
            { value: 'Light', label: 'Light' },
            { value: 'Dark', label: 'Dark' },
            { type: 'separator' },
            {
              type: 'sub',
              value: 'lucy',
              label: 'Lucy',
              options: [
                { value: 'lucy', label: 'Lucy' },
                { value: 'disabled', label: 'Disabled' },
              ],
            },
            {
              type: 'group',
              label: 'Group',
              value: 'group',
              options: [
                {
                  type: 'sub',
                  value: 'sub',
                  label: 'sub',
                  options: [
                    { value: 'lucy1', label: 'Lucy1' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                  ],
                },
              ],
            },
            { value: 'Yiminghe', label: 'yiminghexxaaaaaas' },
            { value: 'disabled2', label: 'Disabled2' },
          ]}
          aria-invalid={true}
        />
      </div>
      <div style={{ margin: '40px 0' }}>
        <Tooltip title="纯文本">
          <Link href="https://www.baidu.com" style={{ marginRight: 130 }}>
            纯文本
          </Link>
        </Tooltip>
        <Tooltip title="附带快捷操作" shortcut={'Alt+0'}>
          <Link style={{ marginRight: 130 }} href="https://www.baidu.com">
            附带快捷操作
          </Link>
        </Tooltip>
        <Tooltip
          title="Header"
          content="Explain behavior that is not clear from the setting or action name."
          shortcut={'Shit+Alt+1'}
          link={{ href: 'https://www.baidu.com', children: 'External', disabled: true }}
        >
          <Link href="https://www.baidu.com">完整内容</Link>
        </Tooltip>
      </div>
      <div style={{ margin: '40px 0' }}>
        <ContextMenu
          options={[
            {
              label: 'Show Context Actions',
              key: '01',
              type: 'item',
              icon: <IdeaOutline />,
              shortcut: 'Alt+Enter',
              // disabled: true,
              onClick: () => {
                alert('Show Context Actions');
              },
            },
            { type: 'separator', key: 'separator_1' },
            {
              label: 'Paste',
              key: '02',
              type: 'item',
              shortcut: 'Ctrl+V',
              icon: <PasteOutline />,
              onClick: () => {
                alert('Paste');
              },
            },
            {
              label: 'Copy/Paste Special Copy/Paste Special Copy/Paste Special',
              key: 'cps',
              type: 'submenu',
              keepIcon: true,
              // disabled: true,
              onClick: () => {
                alert('submenu');
              },
              children: [
                {
                  label: 'Copy References',
                  key: 'cr',
                  type: 'item',
                  shortcut: 'Ctrl+Alt+Shift+C',
                  onClick: () => {
                    alert('Copy References');
                  },
                },
              ],
            },
          ]}
        >
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
          suffix={[{ type: 'arrow-top-right' }]}
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
          href="https://www.baidu.com"
          onClick={() => {
            console.log(3);
          }}
          suffix={[{ type: 'arrow-top-right' }]}
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
