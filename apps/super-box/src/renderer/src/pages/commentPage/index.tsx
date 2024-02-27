import { Box } from '@renderer/styles'
import { FC } from 'react'
import { ReactCommentInput } from '@unreal/react-comment-input'

const CommentPage: FC = () => {
  return (
    <Box $isFull={true} $position={'relative'} $flex={true} $flexDirection={'column'}>
      <div style={{ flexGrow: 1, overflow: 'auto' }}>
        xxx
        <div style={{ height: 2000 }}>aaa</div>
      </div>
      <div style={{ padding: 10 }}>
        <ReactCommentInput placeholder={'说点什么'} />
      </div>
    </Box>
  )
}
export default CommentPage
