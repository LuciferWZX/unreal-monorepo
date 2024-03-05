import { FC } from 'react';
import { Avatar, Layout } from '@arco-design/web-react';

const Header:FC = () => {
  return(
    <Layout.Header style={{height:48,display:'flex',padding:'0 20px',alignItems:'center',justifyContent:'space-between'}}>
      <div/>
      <Avatar size={30}>
        <img
          alt='avatar'
          src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'
        />
      </Avatar>
    </Layout.Header>
  )
}
export default Header