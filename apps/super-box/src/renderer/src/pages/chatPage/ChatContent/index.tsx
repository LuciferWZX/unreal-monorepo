import { FC } from 'react'
import styles from './index.module.less'
import ChatItem from './ChatItem'
import { ChatRole } from '../../../types/ChatBaseType'
import { Bot } from 'lucide-react'
import useChatStore from '../../../store/useChatStore'
import { useShallow } from 'zustand/react/shallow'

const ChatContent: FC = () => {
  const [chatList] = useChatStore(useShallow((state) => [state.chatList]))
  return (
    <div className={styles.chatContentBox} id={'chat-content'}>
      {chatList.map((message) => {
        const avatar =
          message.role === ChatRole.AI ? (
            <Bot size={16} className={'anticon'} />
          ) : (
            'https://api.dicebear.com/7.x/miniavs/svg?seed=1'
          )
        const flexReverse = message.role === ChatRole.User
        return (
          <ChatItem
            key={message.id}
            msgId={message.id}
            flexReverse={flexReverse}
            createTime={message.createTime}
            className={styles.msgItem}
            role={message.role}
            msgStatus={message.status}
            avatar={avatar}
            content={message.content}
          />
        )
      })}
      {/*<ChatItem*/}
      {/*  flexReverse={true}*/}
      {/*  className={styles.msgItem}*/}
      {/*  role={ChatRole.User}*/}
      {/*  avatar={'user'}*/}
      {/*  content={'你好'}*/}
      {/*/>*/}
      {/*<ChatItem*/}
      {/*  role={ChatRole.AI}*/}
      {/*  avatar={<Bot size={16} className={'anticon'} />}*/}
      {/*  content={'我是ai'}*/}
      {/*/>*/}
    </div>
  )
}
export default ChatContent
