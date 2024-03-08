import { FC } from 'react';
import { Layout, Menu } from '@arco-design/web-react';
import { useLocation } from 'react-router-dom';

const Sider:FC = () => {
  const pathname = useLocation().pathname
  return(
    <Layout.Sider
      style={{
       minWidth: 150,
       maxWidth: 300,
      }}>
      <Menu selectedKeys={[pathname]} autoOpen style={{ width: '100%',height:'100%' }}>
        <Menu.Item key='/react-comment-input'  >
          react-comment-input
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}
export default Sider