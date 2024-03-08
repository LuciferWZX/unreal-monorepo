import { FC } from 'react';
import { Avatar, Layout } from '@arco-design/web-react';
import styles from './index.module.less'
const Header:FC = () => {
  return(
    <Layout.Header
      className={styles.header}>
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