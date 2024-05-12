import { FC, ReactNode } from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme } from 'antd';

const { darkAlgorithm, compactAlgorithm } = theme;
interface AntdWrapperProps {
  theme?:'dark'|'light'|'system'
  children?:ReactNode
}
const AntdWrapper:FC<AntdWrapperProps>=(props)=>{
  const {theme,children}=props
  return <StyleProvider hashPriority="high">
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? [darkAlgorithm, compactAlgorithm] : [compactAlgorithm],
      }}
    >
      {children}
    </ConfigProvider>
  </StyleProvider>
}
export default AntdWrapper
