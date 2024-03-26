import { FC } from 'react';
import { Layout, Menu } from '@arco-design/web-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sider: FC = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <Layout.Sider
      style={{
        minWidth: 150,
        maxWidth: 300,
      }}
    >
      <Menu
        onClickMenuItem={(key) => {
          navigate(key);
        }}
        selectedKeys={[pathname]}
        autoOpen
        style={{ width: '100%', height: '100%' }}
      >
        <Menu.SubMenu key="/jb-design" title={'jb-design'}>
          JB-DESIGN
        </Menu.SubMenu>
        <Menu.SubMenu key="/unreal-design" title={'unreal-design'}>
          <Menu.Item key="/unreal-design/input">input</Menu.Item>
          <Menu.Item key="/unreal-design/button">button</Menu.Item>
          <Menu.Item key="/unreal-design/dropdownMenu">dropdownMenu</Menu.Item>
          <Menu.Item key="/unreal-design/scrollArea">scrollArea</Menu.Item>
          <Menu.Item key="/unreal-design/checkBox">checkBox</Menu.Item>
          <Menu.Item key="/unreal-design/popover">popover</Menu.Item>
          <Menu.Item key="/unreal-design/command">command</Menu.Item>
          <Menu.Item key="/unreal-design/dialog">dialog</Menu.Item>
          <Menu.Item key="/unreal-design/tooltip">tooltip</Menu.Item>
          <Menu.Item key="/unreal-design/sonner">sonner</Menu.Item>
          <Menu.Item key="/unreal-design/toast">toast</Menu.Item>
          <Menu.Item key="/unreal-design/radio-group">radio-group</Menu.Item>
          <Menu.Item key="/unreal-design/tag">tag</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="/react-comment-input">react-comment-input</Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};
export default Sider;
