import { FC } from 'react'
import { Avatar, Dropdown, Layout, MenuProps, theme } from 'antd'
import styles from './index.module.less'
import useAppStore from '../../store/useAppStore'
const Header: FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const items: MenuProps['items'] = [
    {
      key: 'changeSetting',
      label: '更改配置',
      onClick: () => {
        useAppStore.setState({
          settingOpen: true
        })
      }
    }
  ]
  return (
    <Layout.Header
      style={{
        padding: 20,
        background: colorBgContainer
      }}
      className={styles.layoutHeader}
    >
      <div />
      <Dropdown menu={{ items }} trigger={['click']}>
        <Avatar
          style={{ cursor: 'pointer', background: 'orange' }}
          src={'https://api.dicebear.com/7.x/miniavs/svg?seed=1'}
        />
      </Dropdown>
    </Layout.Header>
  )
}
export default Header
