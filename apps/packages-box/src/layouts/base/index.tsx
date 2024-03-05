import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@/components';
import { Layout } from '@arco-design/web-react';
import Header from './Header';
import Sider from './Sider';

const BaseLayout:FC = () => {
  return(
    <Box $full={true}>
      <Layout style={{height:'100%',width:"100%"}}>
        <Header/>
        <Layout style={{flexDirection:'row'}}>
          <Sider/>
          <Layout.Content>
            <Outlet/>
          </Layout.Content>
        </Layout>
      </Layout>
    </Box>
  )
}
export default BaseLayout