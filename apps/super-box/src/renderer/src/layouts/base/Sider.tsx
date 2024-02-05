import { Layout, Menu, theme } from 'antd'
import { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Blocks, FileSpreadsheet } from 'lucide-react'

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
            key: '/excel_table',
            label: '数据表格',
            icon: <FileSpreadsheet size={16} className={'anticon'} />,
            onClick: () => {
              navigator('/excel_table')
            }
          },
          {
            key: '/text_template',
            label: '短信模板',
            icon: <Blocks size={16} className={'anticon'} />,
            onClick: () => {
              navigator('/text_template')
            }
          }
        ]}
      />
    </Layout.Sider>
  )
}
export default Sider
