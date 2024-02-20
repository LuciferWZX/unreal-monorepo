import { useEffect, useState } from 'react'
import { ChatRole } from '../../../types/ChatBaseType'
import useChatStore, { Chat, MsgStatus } from '../../../store/useChatStore'
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'

interface Actions {
  onChange: (newText: string) => void
  localSend: () => void
}
const useInputMessage = (): [string, Actions] => {
  const [text, setText] = useState('')
  // const [chatList] = useChatStore(useShallow((state) => [state.chatList]))
  useEffect(() => {
    if (text.trim()) {
      const inputtingChat: Chat = {
        id: nanoid(),
        role: ChatRole.User,
        status: MsgStatus.Inputting,
        content: text,
        createTime: dayjs().unix().valueOf()
      }
      useChatStore.setState((state) => {
        const { chatList } = state
        const inputting = chatList.find((chat) => chat.status === MsgStatus.Inputting)
        if (inputting) {
          inputting.content = text
          return {
            chatList: chatList.map((chat) => {
              if (chat.status === MsgStatus.Inputting) {
                return inputting
              }
              return chat
            })
          }
        }
        return { chatList: chatList.concat(inputtingChat) }
      })
    } else {
      useChatStore.setState((state) => {
        return {
          chatList: state.chatList.filter((chat) => chat.status !== MsgStatus.Inputting)
        }
      })
    }
  }, [text])
  const actions: Actions = {
    onChange: (newText: string) => {
      setText(newText)
    },
    localSend: () => {
      useChatStore.setState((state) => {
        let oldChatList = state.chatList
        const inputting = oldChatList.find((chat) => chat.status === MsgStatus.Inputting)
        if (inputting) {
          inputting.status = MsgStatus.Succeed
          inputting.createTime = dayjs().unix().valueOf()
          oldChatList = oldChatList.map((chat) => {
            if (inputting.id === chat.id) {
              return inputting
            }
            return chat
          })
        }
        const replying = state.chatList.find((chat) => chat.status === MsgStatus.Replying)
        if (!replying) {
          oldChatList = oldChatList.concat({
            id: nanoid(),
            role: ChatRole.AI,
            status: MsgStatus.Replying,
            content: '',
            createTime: dayjs().unix().valueOf()
          })
        }
        return {
          chatList: oldChatList
        }
      })
      setText('')
    }
  }
  return [text, actions]
}
export default useInputMessage
