import request from '../request'

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
  const account = '109993'
  const password = 'zdC4P4'
  const extno = '10690565913'
  const url = `/sms?action=send&account=${account}&password=${password}&mobile=${mobile}&content=${content}&extno=${extno}&rt=json`
  return request(url, { method: 'POST' })
}
