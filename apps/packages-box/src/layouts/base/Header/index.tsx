import { FC } from 'react';
import { Avatar, Layout, Space } from '@arco-design/web-react';
import styles from './index.module.less'
import { Button, Icon, useTheme } from '@wzx-unreal/unreal-design';
const Header:FC = () => {
  const {theme,setTheme}=useTheme()
  return(
    <Layout.Header
      className={styles.header}>
      <div/>
      <div style={{display:'flex',alignItems:'center'}}>
        <Button style={{marginRight:10}} icon={true} onClick={()=>{
          if (theme==='light') {
            setTheme('dark')
          }else if (theme==='dark') {
            setTheme('system')
          }else if (theme==='system') {
            setTheme('light')
          }
        }} variant="ghost">
          <Icon name={theme==='light'?'moon':theme==='dark'?'sun':theme==='system'?'sun-moon':'sun-moon'} />
        </Button>
        <Avatar size={30}>
          <img
            alt='avatar'
            src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'
          />
        </Avatar>
      </div>

    </Layout.Header>
  )
}
export default Header