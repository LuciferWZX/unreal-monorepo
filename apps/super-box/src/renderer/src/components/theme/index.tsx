import { FC, ReactNode } from 'react'
import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'

import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
export interface URThemeProps {
  children?: ReactNode
  urTheme?: 'light' | 'dark' | 'system'
}
const Theme: FC<URThemeProps> = (props) => {
  const { children, urTheme } = props
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: urTheme === 'dark' ? theme.darkAlgorithm : undefined
      }}
    >
      {children}
    </ConfigProvider>
  )
}
export default Theme
