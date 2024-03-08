import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@/components';
import { Layout } from '@arco-design/web-react';
import Header from './Header';
import Sider from './Sider';
import './index.less'
const BaseLayout:FC = () => {
  return(
    <Box $full={true}>
      <Layout className={'package-box-layout'}>
        <Header/>
        <Layout style={{flexDirection:'row'}}>
          <Sider/>
          <Layout style={{padding:20}}>
            <Layout.Content >
              <Outlet/>
            </Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    </Box>
  )
}
export default BaseLayout