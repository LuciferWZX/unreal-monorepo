import { FC } from 'react'
import { Box } from '../../../styles'
import ChatContent from '../ChatContent'
import ChatArea from '../ChatArea'

const ChatLayout: FC = () => {
  return (
    <Box $isFull={true} $flex={true} $flexDirection={'column'}>
      <ChatContent />
      <ChatArea />
    </Box>
  )
}
export default ChatLayout
