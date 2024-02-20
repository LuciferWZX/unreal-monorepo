import { create } from 'zustand'
import { persist, subscribeWithSelector } from 'zustand/middleware'
import { AIType, ChatRole } from '../types/ChatBaseType'

export enum MsgStatus {
  Inputting = 'inputting', //输入中
  Replying = 'replying', //回复中
  Failed = 'failed', //发送失败
  Succeed = 'succeed' //发送失败
}
export interface Chat {
  id: string
  platform?: AIType
  role: ChatRole
  status: MsgStatus
  content: string
  createTime: number
}
interface ChatStoreState {
  chatList: Chat[]
}

const initialState: ChatStoreState = {
  chatList: []
}
const useChatStore = create(
  persist(
    subscribeWithSelector<ChatStoreState>(() => ({
      ...initialState
    })),
    {
      name: 'boxes-chat'
    }
  )
)
// useAppStore.subscribe(
//   (state) => state,
//   (newState) => {
//     const { account, password, extNo, smsUrl } = newState
//     if (account === '' || password === '' || extNo === '' || smsUrl === '') {
//       useAppStore.setState({
//         settingOpen: true
//       })
//     }
//   },
//   {
//     fireImmediately: true
//   }
// )
export default useChatStore
