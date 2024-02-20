import styled from 'styled-components'

export const StyledChatItem = styled.div`
  display: flex;
  gap: 15px;
`
export const StyledChatBubbleContainer = styled.div<{ $flexReverse?: boolean }>`
  flex: 1;
  text-align: ${(props) => (props.$flexReverse ? 'right' : 'left')};
  overflow: hidden;
`
export const StyledChatBubble = styled.div`
  border-radius: 8px;
  padding: 10px;
  display: inline-block;
  word-break: break-word;
  text-align: left;
  //white-space: pre-line;
  user-select: text;
`
export const StyledCursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 14px;
  background: #91caff;
  vertical-align: text-bottom;
  animation: blink-caret 1s infinite;
`
