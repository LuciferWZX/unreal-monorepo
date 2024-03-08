import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import useTheme from '@/hooks/useTheme.ts';

const Layouts:FC = () => {
  useTheme()
  return(
    <div>
      <Outlet/>
    </div>
  )
}
export default Layouts