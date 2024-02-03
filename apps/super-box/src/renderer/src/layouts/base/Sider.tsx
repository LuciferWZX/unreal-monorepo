import { Layout, Menu, theme } from 'antd'
import { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Sider: FC = () => {
  const location = useLocation()
  const navigator = useNavigate()
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const [collapsed] = useState(false)

  return (
    <Layout.Sider
      style={{ background: colorBgContainer }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div style={{ height: 60 }} />
      <Menu
        style={{ height: '100%', borderRight: 0 }}
        theme="light"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={[
          {
            key: '/excelTablePage',
            label: '数据表格',
            onClick: () => {
              navigator('/excelTablePage')
            }
          }
        ]}
      />
    </Layout.Sider>
  )
}
export default Sider
