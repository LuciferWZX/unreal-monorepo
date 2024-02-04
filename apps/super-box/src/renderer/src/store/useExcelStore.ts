import { create } from 'zustand'
import { persist } from 'zustand/middleware'
export interface ExcelStoreState {
  data: Record<string, any>[]
  fieldMap: Record<string, string>
  phoneColumn: string | undefined
  TEXT_TEMPLATE: string
}
const initialState: ExcelStoreState = {
  data: [],
  phoneColumn: undefined,
  fieldMap: {},
  TEXT_TEMPLATE:
    'xx你好，安徽xx个，已付xx元，含近几天打卡xx元；湖北xx个，已付xx元，含近几天打卡xx元；山西xx个，已付xx元；河南xx个，已付xx元。合计xx个，合计预付xx元。如有不对，可联系对应工地的会计。提前祝您春节快乐，阖家兴福，如意安康！'
}
const useExcelStore = create(
  persist<ExcelStoreState>(
    () => ({
      ...initialState
    }),
    {
      name: 'boxes-excel'
    }
  )
)
export default useExcelStore
