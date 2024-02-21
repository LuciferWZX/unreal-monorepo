import CryptoJS from 'crypto-js'
import { useMemo, useRef } from 'react'
import { PayloadText, ReplayStatus, XunFeiData, XunFeiParams } from '../../../types/XunFei'
import { ChatRole } from '../../../types/ChatBaseType'
import useChatStore, { MsgStatus } from '../../../store/useChatStore'
import { useShallow } from 'zustand/react/shallow'
import dayjs from 'dayjs'
import { scrollIntoView } from '@unreal/react-hooks'

// import { useShallow } from 'zustand/react/shallow'

interface Actions {
  getConnectURL: () => Promise<string>
  initSystemRole: () => void
}
interface Socket {
  sendMsg: (content: string) => void
}
const useXunfei = (): [Socket, Actions] => {
  const [chatList] = useChatStore(useShallow((state) => [state.chatList]))
  const websocketRef = useRef<WebSocket>()
  const APPID = 'fef72b7e'
  const APISecret = 'NjMzNWZlM2NjMWQ1OTcyOWMxMTYxNzQ1'
  const APIKey = '6e81a16105f57046371a4931be26525a'
  const serviceUrl = 'wss://spark-api.xf-yun.com/v1.1/chat'
  const getBaseParams = (text: PayloadText): XunFeiParams => {
    return {
      header: {
        app_id: APPID,
        uid: 'fd3f47e4-d'
      },
      parameter: {
        chat: {
          domain: 'general',
          temperature: 0.5,
          max_tokens: 1024
        }
      },
      payload: {
        message: {
          text: text
        }
      }
    }
  }
  const historyPayloadText: PayloadText = useMemo(() => {
    return chatList
      .filter((chat) => chat.status === MsgStatus.Succeed)
      .map((chat) => {
        return {
          role: chat.role,
          content: chat.content
        }
      })
  }, [chatList])
  const actions: Actions = {
    getConnectURL: async () => {
      const date = new Date().toUTCString()
      // http://30.1.10.16:5173/
      const host = location.host
      const algorithm = 'hmac-sha256'
      const headers = 'host date request-line'
      const signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v1.1/chat HTTP/1.1`
      const signatureSha = CryptoJS.HmacSHA256(signatureOrigin, APISecret)
      const signature = CryptoJS.enc.Base64.stringify(signatureSha)
      const authorizationOrigin = `api_key="${APIKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`
      const authorization = btoa(authorizationOrigin)
      return `${serviceUrl}?authorization=${authorization}&date=${date}&host=${host}`
    },
    initSystemRole: () => {
      const params: XunFeiParams = getBaseParams([
        {
          role: ChatRole.System,
          content:
            '你现在是一个无所不知的二次元可爱画风的女生，接下来请以这可爱的女生的口吻和用户对话。'
        },
        {
          role: ChatRole.User,
          content: '你好，你是谁？'
        }
      ])
      websocketRef.current?.send(JSON.stringify(params))
    }
  }
  const scrollToMsg = (msgId: string) => {
    const msgElement = document.getElementById(`chat-${msgId}`)
    if (msgElement) {
      scrollIntoView(msgElement, {
        behavior: 'smooth',
        block: 'start',
        scrollMode: 'if-needed',
        boundary: document.getElementById('chat-content')
      })
    }
  }
  const socket: Socket = {
    sendMsg: async (content: string) => {
      const url = await actions.getConnectURL()
      if ('WebSocket' in window) {
        const ttsWS = new WebSocket(url)
        websocketRef.current = ttsWS
        ttsWS.onopen = (e) => {
          console.log('连接成功：', e)
          const params = getBaseParams(
            historyPayloadText.concat({ role: ChatRole.User, content: content })
          )
          if (websocketRef.current) {
            console.log('发送的数据:', params)
            websocketRef.current.send(JSON.stringify(params))
          }
        }
        ttsWS.onmessage = (e) => {
          console.log('收到消息:', e.data)
          try {
            const data: XunFeiData = JSON.parse(e.data)
            const { chatList: newChatList } = useChatStore.getState()
            const replyChat = newChatList.find((chat) => chat.status === MsgStatus.Replying)
            if (replyChat && data.header.code === 0) {
              replyChat.content = replyChat.content.concat(data.payload.choices.text[0].content)
              if (data.header.status === ReplayStatus.First) {
                replyChat.createTime = dayjs().unix().valueOf()
              }
              if (data.header.status === ReplayStatus.Last) {
                replyChat.status = MsgStatus.Succeed
              }
              useChatStore.setState({
                chatList: newChatList.map((chat) => {
                  if (chat.id === replyChat.id) {
                    return replyChat
                  }
                  return chat
                })
              })
              scrollToMsg(replyChat.id)
            }
          } catch (error) {
            console.error('消息解析出错：', error)
          }
        }
        ttsWS.onerror = (e) => {
          console.error('WebSocket报错，请f12查看详情', e)
          console.error(`详情查看：${encodeURI(url.replace('wss:', 'https:'))}`)
        }
        ttsWS.onclose = (e) => {
          console.log('连接关闭:', e)
        }
      } else {
        alert('浏览器不支持WebSocket')
        return
      }
    }
  }
  return [socket, actions]
}
export default useXunfei
