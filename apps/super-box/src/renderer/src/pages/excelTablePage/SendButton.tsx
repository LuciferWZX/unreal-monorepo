import { App, Button } from 'antd'
import useExcelStore from '../../store/useExcelStore'
import { useShallow } from 'zustand/react/shallow'
import { FC, useMemo } from 'react'
import { Utils } from '../../utils'
import { sendMessage } from '../../services/api/message'
import { useBoolean } from '@wzx-unreal/react-hooks'

interface IProps {
  record: Record<string, string>
}
const SendButton: FC<IProps> = (props) => {
  const { record } = props
  const [loading, { set }] = useBoolean(false)
  const { message } = App.useApp()
  const [fieldMap, TEXT_TEMPLATE, phoneColumn, excelData, successIds] = useExcelStore(
    useShallow((state) => [
      state.fieldMap,
      state.TEXT_TEMPLATE,
      state.phoneColumn,
      state.data,
      state.successIds
    ])
  )
  const text = useMemo(() => {
    const tempMap = {}
    Object.keys(fieldMap).forEach((key) => {
      tempMap[key] = record[fieldMap[key]]
    })
    return Utils.formatText(TEXT_TEMPLATE, '[@]', (idx, value) => {
      if (tempMap[`#${idx}`]) {
        let val = tempMap[`#${idx}`]
        val = typeof val === 'number' ? val.toFixed(2) : val
        return `${val}${value}`
      }
      return `0${value}`
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
    const res = await sendMessage({ mobile: phone, content: text })
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
        useExcelStore.setState({
          successIds: [...successIds, record.key]
        })
      }
    }
  }
  return (
    <Button
      loading={loading}
      onClick={sendMsg}
      size={'small'}
      type={successIds.includes(record.key) ? 'text' : 'link'}
    >
      {successIds.includes(record.key) ? '重新发送' : '发送'}
    </Button>
  )
}
export default SendButton
