import { useBoolean } from '@unreal/react-hooks'
import { useCallback, useState } from 'react'
import { Utils } from '../../utils'
import useExcelStore from '../../store/useExcelStore'
import { App } from 'antd'
import { useShallow } from 'zustand/react/shallow'
import { sendMessage } from '../../services/api/message'

interface Actions {
  bunchSend: (dataSource: Record<string, any>) => void
  setCountNumber: (num: number) => void
}
export const useBunchSend = (): [boolean, number, Actions] => {
  const [count, setCount] = useState(0)
  const [loading, { setTrue, setFalse }] = useBoolean(false)
  const { message } = App.useApp()
  const [fieldMap, TEXT_TEMPLATE, phoneColumn, excelData] = useExcelStore(
    useShallow((state) => [
      state.fieldMap,
      state.TEXT_TEMPLATE,
      state.phoneColumn,
      state.data,
      state.successIds
    ])
  )
  const getContent = useCallback(
    (record: Record<string, any>) => {
      const tempMap = {}
      Object.keys(fieldMap).forEach((key) => {
        tempMap[key] = record[fieldMap[key]]
      })
      return Utils.formatText(TEXT_TEMPLATE, '[@]', (idx, value) => {
        if (tempMap[`#${idx}`]) {
          const val = tempMap[`#${idx}`]
          return `${val}${value}`
        }
        return `0${value}`
      })
    },
    [fieldMap, TEXT_TEMPLATE, excelData]
  )
  const actions = {
    bunchSend: async (dataSource: Record<string, any>) => {
      if (!phoneColumn) {
        message.error({ content: '请先选择手机号字段', key: 'phone' })
        return
      }
      setCount(0)
      setTrue()
      const validData = dataSource.filter((item: Record<string, any>) => {
        return item[phoneColumn]
      })
      for (const item of validData) {
        try {
          const text = getContent(item)
          const phone = item[phoneColumn]
          const res = await sendMessage({ mobile: phone, content: text })
          if (res) {
            setCount((count) => count + 1)
            if (res.status === '0') {
              useExcelStore.setState((state) => {
                return {
                  successIds: [...state.successIds, item.key]
                }
              })
            }
          }
        } catch (error) {
          console.error('Error:', error)
        }
      }
      message.success({ content: '一键发送已完成', key: 'phone' })
      setFalse()
    },
    setCountNumber: (num: number) => {
      setCount(num)
    }
  }
  return [loading, count, actions]
}
