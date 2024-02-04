import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@renderer/styles'
import styles from './index.module.less'
import { URTheme } from '../components'
import { App } from 'antd'
import { useTheme } from '@unreal/react-hooks'
const Layouts: FC = () => {
  const [theme] = useTheme('system', {
    storageKey: 'ur-theme'
  })
  return (
    <URTheme urTheme={theme}>
      <App>
        <Box className={styles.appLayout}>
          <Outlet />
        </Box>
      </App>
    </URTheme>
  )
}
export default Layouts
