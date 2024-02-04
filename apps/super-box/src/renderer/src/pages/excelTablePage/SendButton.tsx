import { App, Button } from 'antd'
import useExcelStore from '../../store/useExcelStore'
import { useShallow } from 'zustand/react/shallow'
import { FC, useMemo } from 'react'
import { Utils } from '../../utils'
import { sendMessage } from '../../services/api/message'
import { useBoolean } from '@unreal/react-hooks'

interface IProps {
  record: Record<string, string>
}
const SendButton: FC<IProps> = (props) => {
  const { record } = props
  const [loading, { set }] = useBoolean(false)
  const { message } = App.useApp()
  const [fieldMap, TEXT_TEMPLATE, phoneColumn, excelData] = useExcelStore(
    useShallow((state) => [state.fieldMap, state.TEXT_TEMPLATE, state.phoneColumn, state.data])
  )
  const text = useMemo(() => {
    const tempMap = {}
    Object.keys(fieldMap).forEach((key) => {
      tempMap[key] = record[fieldMap[key]]
    })
    return Utils.formatText(TEXT_TEMPLATE, 'xx', (idx, value) => {
      if (tempMap[`#${idx}`]) {
        const val = tempMap[`#${idx}`]
        return `${val}${value}`
      }
      return `#${idx}${value}`
    })
  }, [fieldMap, TEXT_TEMPLATE, excelData])
  const sendMsg = async () => {
    set(true)
    if (!phoneColumn) {
      message.error({ content: '请先选择手机号字段', key: 'phone' })
      set(false)
      return
    }
    const phone = record[phoneColumn]
    if (!phone) {
      message.error({ content: '手机号不存在', key: 'phone' })
      set(false)
      return
    }
    console.log('phone:', phone)
    console.log('text:', text)

    const res = await sendMessage({ mobile: phone, content: '【康桥】:' + text })
    set(false)
    if (res && res.status !== '0') {
      let errorText = ''
      switch (res.status) {
        case '3': {
          errorText = '账号密码不正确'
          break
        }
      }
      message.error({ content: errorText, key: 'phone' })
      return
    } else {
      if (res && res.status === '0') {
        message.success({ content: '发送成功', key: 'phone' })
      }
    }
  }
  return (
    <Button loading={loading} onClick={sendMsg} size={'small'} type={'link'}>
      发送
    </Button>
  )
}
export default SendButton
