import { FC } from 'react'
import { Avatar, Layout, theme } from 'antd'
import styles from './index.module.less'
const Header: FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <Layout.Header
      style={{
        padding: 20,
        background: colorBgContainer
      }}
      className={styles.layoutHeader}
    >
      <div />
      <Avatar
        style={{ cursor: 'pointer', background: 'orange' }}
        src={'https://api.dicebear.com/7.x/miniavs/svg?seed=1'}
      />
    </Layout.Header>
  )
}
export default Header
