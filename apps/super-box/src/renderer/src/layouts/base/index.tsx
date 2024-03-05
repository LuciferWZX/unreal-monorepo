import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Sider from './Sider'
import styles from './index.module.less'
import Header from './Header'
import AuthModal from './AuthModal'
const BaseLayout: FC = () => {
  return (
    <Layout className={styles.baseLayout}>
      <Sider />
      <Layout>
        <Header />
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
export default BaseLayout
