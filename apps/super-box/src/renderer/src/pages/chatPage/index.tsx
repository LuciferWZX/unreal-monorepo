import { FC, useEffect } from 'react'
import ChatLayout from './ChatLayout'
import useXunfei from './useXunfei'

const ChatPage: FC = () => {
  const [{ init }] = useXunfei()
  useEffect(() => {
    init()
  }, [])
  return <ChatLayout />
}
export default ChatPage
