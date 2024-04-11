import { FC } from 'react';
import styles from './index.module.css'
import {cn} from "@wzx-unreal/jb-design";
import AI from '@/assets/ai.svg'
const Header: FC = () => {
  const classes =cn(styles.base_header)
  return <header className={classes}>
    <img alt={'ai'} src={AI} className={styles.base_header_logo}/>
  </header>;
};
export default Header;
