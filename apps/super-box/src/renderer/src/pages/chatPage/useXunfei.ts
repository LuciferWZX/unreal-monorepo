import CryptoJS from 'crypto-js'
import { useRef } from 'react'

interface Actions {
  getConnectURL: () => Promise<string>
  sendFirstMessage: () => void
}
interface Socket {
  init: () => Promise<void>
}
const useXunfei = (): [Socket, Actions] => {
  const websocketRef = useRef<WebSocket>()
  const APPID = 'fef72b7e'
  const APISecret = 'NjMzNWZlM2NjMWQ1OTcyOWMxMTYxNzQ1'
  const APIKey = '6e81a16105f57046371a4931be26525a'
  const serviceUrl = 'wss://spark-api.xf-yun.com/v1.1/chat'

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
    sendFirstMessage: () => {
      const params = {
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
            text: [
              {
                role: 'user',
                content: '中国第一个皇帝是谁？'
              },
              {
                role: 'assistant',
                content: '秦始皇'
              },
              {
                role: 'user',
                content: '秦始皇修的长城吗'
              },
              {
                role: 'assistant',
                content: '是的'
              },
              {
                role: 'user',
                content: 'hello'
              }
            ]
          }
        }
      }
      console.log(JSON.stringify(params))
      websocketRef.current?.send(JSON.stringify(params))
    }
  }
  const socket: Socket = {
    init: async () => {
      const url = await actions.getConnectURL()
      console.log(11, url)
      if ('WebSocket' in window) {
        const ttsWS = new WebSocket(url)
        websocketRef.current = ttsWS
        ttsWS.onopen = (e) => {
          console.log('连接成功：', e)
          actions.sendFirstMessage()
        }
        ttsWS.onmessage = (e) => {
          console.log('收到消息:', e.data)
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
