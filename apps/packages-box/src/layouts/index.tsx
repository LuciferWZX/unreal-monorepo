import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import useTheme from '@/hooks/useTheme.ts';
import {ThemeProvider} from '@wzx-unreal/unreal-design';

const Layouts:FC = () => {
  useTheme()
  return(
    <div>
      <ThemeProvider rootElement={document.body} storageKey={'arco-theme'} >
        <Outlet/>
      </ThemeProvider>
    </div>
  )
}
export default Layouts