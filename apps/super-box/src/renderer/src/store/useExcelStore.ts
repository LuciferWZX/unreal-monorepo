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
  textTemplates: [],
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
