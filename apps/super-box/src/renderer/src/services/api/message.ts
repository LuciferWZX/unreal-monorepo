import request from '../request'
import useAppStore from '../../store/useAppStore'
import { isDev } from '@unreal/react-hooks'

export interface SmsResponse {
  balance: number
  list: null
  status: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '21' | '31' | '100' | '102' | '0'
}
export const sendMessage = async (params: {
  mobile: string
  content: string
}): Promise<SmsResponse | undefined> => {
  const { mobile, content } = params
  const { account, password, extNo, smsUrl } = useAppStore.getState()
  let url = `/sms?action=send&account=${account}&password=${password}&mobile=${mobile}&content=${content}&extno=${extNo}&rt=json`
  if (!isDev) {
    url = `${smsUrl}${url}`
  }
  return request(url, { method: 'POST' })
}
