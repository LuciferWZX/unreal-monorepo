import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout: FC = () => {
  return (
    <div>
      this is auth layout <Outlet />
    </div>
  )
}
export default AuthLayout
