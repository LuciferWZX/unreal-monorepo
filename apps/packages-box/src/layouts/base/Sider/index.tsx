import { FC } from 'react';
import { Layout, Menu } from '@arco-design/web-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sider:FC = () => {
  const pathname = useLocation().pathname
  const navigate = useNavigate()
  return(
    <Layout.Sider
      style={{
       minWidth: 150,
       maxWidth: 300,
      }}>
      <Menu onClickMenuItem={key=>{
        navigate(key)
      }} selectedKeys={[pathname]} autoOpen style={{ width: '100%',height:'100%' }}>
        <Menu.SubMenu
          key='/unreal-design'
          title={'unreal-design' }
        >
          <Menu.Item key='/unreal-design/button'  >
            button
          </Menu.Item>
          <Menu.Item key='/unreal-design/scrollArea'  >
            scrollArea
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key='/react-comment-input'  >
          react-comment-input
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}
export default Sider