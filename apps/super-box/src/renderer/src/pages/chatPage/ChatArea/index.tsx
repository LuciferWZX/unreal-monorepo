import { FC } from 'react'
import styles from './index.module.less'
import { Button, Input } from 'antd'
import useInputMessage from '../hooks/useInputMessage'
import useXunfei from '../hooks/useXunfei'

const ChatArea: FC = () => {
  const [text, { onChange, localSend }] = useInputMessage()
  const [{ sendMsg }] = useXunfei()
  return (
    <div className={styles.chatAreaBox}>
      <Input.TextArea
        value={text}
        onChange={(event) => onChange(event.target.value)}
        className={styles.textArea}
        autoSize={{ minRows: 1, maxRows: 4 }}
        onKeyDown={(e) => {
          if (e.ctrlKey && e.code === 'Enter') {
            sendMsg(text)
            localSend()
          }
        }}
        placeholder={'请输入'}
      />
      <Button type={'primary'}>发送</Button>
    </div>
  )
}
export default ChatArea
