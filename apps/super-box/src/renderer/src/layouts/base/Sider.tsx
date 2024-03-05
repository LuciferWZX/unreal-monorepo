import { Layout, Menu, theme } from 'antd'
import { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Blocks, Bot, Code2, FileSpreadsheet } from 'lucide-react'

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
            key: '/code',
            label: '编辑器',
            icon: <Code2 size={16} className={'anticon'} />,
            onClick: () => {
              navigator('/code')
            }
          },
          {
            key: '/comment',
            label: '输入',
            icon: <Code2 size={16} className={'anticon'} />,
            onClick: () => {
              navigator('/comment')
            }
          }
        ]}
      />
    </Layout.Sider>
  )
}
export default Sider
