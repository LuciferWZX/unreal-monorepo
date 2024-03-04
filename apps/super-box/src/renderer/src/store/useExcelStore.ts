import { create } from 'zustand'
import { persist, subscribeWithSelector } from 'zustand/middleware'
import { isUndefined } from '@wzx-unreal/react-hooks'
export interface ExcelStoreState {
  data: Record<string, any>[]
  fieldMap: Record<string, string>
  reflectMap: Record<string, Record<string, string>>
  phoneColumn: string | undefined
  textTemplates: Array<{ id: string; content: string; label: string; sign: string }>
  curTemplateId: string | undefined
  TEXT_TEMPLATE: string
  successIds: Array<number | string>
}
const initialState: ExcelStoreState = {
  data: [],
  phoneColumn: undefined,
  fieldMap: {},
  reflectMap: {},
  textTemplates: [
    {
      id: '1',
      label: '默认模板',
      sign: '【康桥】',
      content:
        '[@]你好，1-12月：安徽[@]个，已付[@]元，含近几天打卡[@]元；湖北[@]个，已付[@]元，含近几天打卡[@]元；山西[@]个，已付[@]元；河南[@]个，已付[@]元。合计[@]个，合计预付[@]元。如有不对，可联系对应工地的会计。提前祝您春节快乐，阖家兴福，如意安康！'
    },
    {
      id: '2',
      label: '已结清',
      sign: '【康桥】',
      content:
        '[@]你好，1-12月总工[@]个，总额[@]元，总付[@]元，已结清。新年到，龙年到，祝您和家人万事如意，幸福美满，龙年吉祥！'
    },
    {
      id: '3',
      label: '未结清',
      sign: '【康桥】',
      content:
        '[@]你好，1-12月总工[@]个，总额[@]元，总付[@]元，余额[@]元，将于近日汇达你的中国农业银行账户，汇款有先后。新年到，龙年到，祝您和家人万事如意，兴福美满，龙年吉祥！'
    }
  ],
  curTemplateId: undefined,
  TEXT_TEMPLATE: '',
  successIds: []
}
const useExcelStore = create(
  persist(
    subscribeWithSelector<ExcelStoreState>(() => ({
      ...initialState
    })),
    {
      name: 'boxes-excel'
    }
  )
)
useExcelStore.subscribe(
  (state) => state.textTemplates,
  (temps) => {
    const cId = useExcelStore.getState().curTemplateId
    if (isUndefined(cId) && temps.length > 0) {
      useExcelStore.setState({ curTemplateId: temps[0].id })
    }
  },
  {
    fireImmediately: true
  }
)
useExcelStore.subscribe(
  (state) => state.curTemplateId,
  (cId) => {
    const textTemplates = useExcelStore.getState().textTemplates
    const target = textTemplates.find((item) => item.id === cId)
    if (!isUndefined(target)) {
      const reflectMap = useExcelStore.getState().reflectMap

      const cacheFieldMap = isUndefined(reflectMap[target.id]) ? {} : reflectMap[target.id]
      useExcelStore.setState({
        TEXT_TEMPLATE: target.sign + target.content,
        fieldMap: cacheFieldMap
      })
    }
  },
  {
    fireImmediately: true
  }
)
useExcelStore.subscribe(
  (state) => state.fieldMap,
  (fieldMap) => {
    const curTemplateId = useExcelStore.getState().curTemplateId
    const reflectMap = useExcelStore.getState().reflectMap
    if (curTemplateId) {
      reflectMap[curTemplateId] = fieldMap
      useExcelStore.setState({ reflectMap: reflectMap })
    }
  },
  {
    fireImmediately: true
  }
)
export default useExcelStore
