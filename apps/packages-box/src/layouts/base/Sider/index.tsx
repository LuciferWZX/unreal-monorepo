import { FC } from 'react';
import { Layout, Menu } from '@arco-design/web-react';

const Sider:FC = () => {
  return(
    <Layout.Sider
      theme='dark'
      style={{
       minWidth: 150,
       maxWidth: 300,
      }}>
      <Menu theme='dark' autoOpen style={{ width: '100%',height:'100%' }}>
        <Menu.Item key='1'  >
          react-comment-input
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}
export default Sider