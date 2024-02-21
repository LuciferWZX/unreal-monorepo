import { FC, ReactNode, useMemo } from 'react'
import styles from './index.module.less'
import { StyledChatBubble, StyledChatBubbleContainer, StyledChatItem, StyledCursor } from './style'
import { ChatRole } from '../../../../types/ChatBaseType'
import { Avatar, theme } from 'antd'
import { ClassNames } from '@unreal/react-hooks'
import { MsgStatus } from '../../../../store/useChatStore'
import dayjs from 'dayjs'
import MarkdownRender from './MarkdownRender'
import './github-markdown-dark.css'
interface ChatItemProps {
  msgId: string
  role: ChatRole
  avatar: ReactNode
  flexReverse?: boolean
  content: string
  className?: string
  msgStatus: MsgStatus
  createTime: number
}
const ChatItem: FC<ChatItemProps> = (props) => {
  const { avatar, content, role, msgId, className, createTime, msgStatus, flexReverse } = props

  const {
    token: { colorPrimaryBg, colorTextSecondary }
  } = theme.useToken()
  const avatarColor = useMemo(() => {
    const colorMap = {
      [ChatRole.AI]: colorPrimaryBg
    }
    return colorMap[role]
  }, [role])
  const bubbleBgColor = useMemo(() => {
    const colorMap = {
      [ChatRole.AI]: colorPrimaryBg,
      [ChatRole.User]: '#389e0d'
    }
    return colorMap[role]
  }, [role])
  const avatarElement = useMemo(() => {
    return (
      <Avatar style={{ backgroundColor: avatarColor }} src={avatar}>
        {avatar}
      </Avatar>
    )
  }, [avatarColor, avatar])
  const inputtingElement = useMemo(() => {
    if (msgStatus === MsgStatus.Inputting) {
      return (
        <div className={styles.inputting} style={{ color: colorTextSecondary }}>
          正在输入中...
        </div>
      )
    }
    if (msgStatus === MsgStatus.Replying) {
      return (
        <div className={styles.inputting} style={{ color: colorTextSecondary }}>
          正在回复中...
        </div>
      )
    }
    if (msgStatus === MsgStatus.Succeed) {
      return (
        <div className={styles.succeed} style={{ color: colorTextSecondary }}>
          {dayjs(createTime * 1000).format('YYYY-MM-DD HH:mm:ss')}
        </div>
      )
    }
    return null
  }, [msgStatus, createTime])
  const replyingCursorElement = useMemo(() => {
    if (msgStatus === MsgStatus.Replying) {
      return <StyledCursor />
    }
    return null
  }, [msgStatus])
  const bubbleElement = useMemo(() => {
    return (
      <StyledChatBubbleContainer $flexReverse={flexReverse}>
        {inputtingElement}
        <StyledChatBubble className={'markdown-body'} style={{ backgroundColor: bubbleBgColor }}>
          <MarkdownRender content={content} />
          {replyingCursorElement}
        </StyledChatBubble>
      </StyledChatBubbleContainer>
    )
  }, [colorPrimaryBg, content, flexReverse, inputtingElement, msgStatus])
  return (
    <StyledChatItem id={`chat-${msgId}`} className={ClassNames(className)}>
      {flexReverse ? (
        <>
          {bubbleElement}
          {avatarElement}
        </>
      ) : (
        <>
          {avatarElement}
          {bubbleElement}
        </>
      )}
    </StyledChatItem>
  )
}
export default ChatItem
