import { create } from 'zustand'
import { persist, subscribeWithSelector } from 'zustand/middleware'

interface AppStoreState {
  account: string //用户账户
  password: string //用户密码
  extNo: string //接入号
  smsUrl: string //接口地址 baseurl+port
  settingOpen: boolean
}
const initialState: AppStoreState = {
  account: '',
  password: '',
  extNo: '',
  smsUrl: '',
  settingOpen: false
}
const useAppStore = create(
  persist(
    subscribeWithSelector<AppStoreState>(() => ({
      ...initialState
    })),
    {
      name: 'boxes-app'
    }
  )
)
useAppStore.subscribe(
  (state) => state,
  (newState) => {
    const { account, password, extNo, smsUrl } = newState
    if (account === '' || password === '' || extNo === '' || smsUrl === '') {
      useAppStore.setState({
        settingOpen: true
      })
    }
  },
  {
    fireImmediately: true
  }
)
export default useAppStore
