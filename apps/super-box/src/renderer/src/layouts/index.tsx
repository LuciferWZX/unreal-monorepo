import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@renderer/styles'
import styles from './index.module.less'
const Layouts: FC = () => {
  return (
    <Box className={styles.appLayout}>
      <Outlet />
    </Box>
  )
}
export default Layouts
