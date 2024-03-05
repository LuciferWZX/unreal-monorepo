import { FC, useState } from 'react';
import { PreviewEditor, ReactCommentInput } from '@wzx-unreal/react-comment-input';
import "@wzx-unreal/react-comment-input/lib/style.css";
import styles from './index.module.less'
const ReactCommentInputPage:FC = () => {
  const [html,setHtml]=useState<string>("")
  return(
    <div className={styles.box}>
      <div className={styles.previewBox}>
        <PreviewEditor value={html}/>
      </div>
      <div className={styles.innerBox}>
        <ReactCommentInput onChange={setHtml} placeholder={'说点什么'}/>
      </div>
    </div>
  )
}
export default ReactCommentInputPage