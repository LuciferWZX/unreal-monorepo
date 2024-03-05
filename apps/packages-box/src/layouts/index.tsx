import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layouts:FC = () => {
  return(
    <div>
      <Outlet/>
    </div>
  )
}
export default Layouts