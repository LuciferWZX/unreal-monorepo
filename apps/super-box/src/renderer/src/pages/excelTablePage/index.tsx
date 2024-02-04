import { Alert, App, Button, GetProp, Result, Space, Table, Upload, UploadProps } from 'antd'
import { Box } from '../../styles'
import styles from './index.module.less'
import { useCallback, useMemo, useRef } from 'react'
import { Utils } from '../../utils'
import * as XLSX from 'xlsx'
import useExcelStore from '../../store/useExcelStore'
import { useShallow } from 'zustand/react/shallow'
import { useBoolean, useSize } from '@unreal/react-hooks'
import FieldMapModal from './FieldMapModal'
import EditableText from './EditableText'
import SendButton from './SendButton'
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]
const ExcelTablePage = () => {
  const { message } = App.useApp()
  const containerRef = useRef<HTMLDivElement>(null)
  const [excelData, TEXT_TEMPLATE, fieldMap] = useExcelStore(
    useShallow((state) => [state.data, state.TEXT_TEMPLATE, state.fieldMap])
  )
  const size = useSize(containerRef)
  const [open, { setTrue, setFalse }] = useBoolean(false)
  /**
   * excel真实数据
   */
  const dataSource = useMemo(() => {
    return excelData.map((obj, idx) => {
      const renamedObj = {
        key: idx
      }
      Object.keys(obj).forEach((key, index) => {
        renamedObj[`H${index + 1}`] = obj[key]
      })
      return renamedObj
    })
  }, [excelData])
  /**
   * excel表头
   */
  const columns = useMemo(() => {
    if (excelData.length > 0) {
      const keys = Object.keys(excelData[0])
      return keys
        .map((key, index) => {
          return {
            title: key,
            dataIndex: `H${index + 1}`,
            key: `H${index + 1}`,
            width: 180,
            render: (text: string, _, index: number) => {
              return (
                <EditableText
                  onChange={(newText) => {
                    useExcelStore.setState({
                      data: excelData.map((curData, idx) => {
                        if (index === idx) {
                          return { ...curData, [key]: newText }
                        }
                        return curData
                      })
                    })
                  }}
                  text={text}
                />
              )
            }
          }
        })
        .concat({
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          fixed: 'right',
          width: 120,
          render: (_, record) => {
            return <SendButton />
          }
        } as any)
    }
    return []
  }, [excelData])
  const headers2 = useMemo(() => {
    if (excelData.length > 0) {
      const obj = excelData[0]
      const newData: Array<{ value: string; label: string }> = []
      Object.keys(obj).forEach((key, index) => {
        newData.push({ value: `H${index + 1}`, label: key })
      })
      return newData
    }
    return []
  }, [excelData])
  /**
   * 短信模板
   */
  const textTemplate = useMemo(() => {
    const html = Utils.formatText(TEXT_TEMPLATE, 'xx', (idx, value) => {
      if (fieldMap[`#${idx}`]) {
        const headerKey = fieldMap[`#${idx}`]
        const targetLabel = headers2.find((item) => item.value === headerKey)?.label
        return `<span class="${styles.changedTemplateTag}">${targetLabel}</span>${value}`
      }
      return `<span class="${styles.templateTag}">#${idx}</span>${value}`
    })
    return <div dangerouslySetInnerHTML={{ __html: html }} />
  }, [fieldMap])
  const handleExcel = async (file: FileType) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const result = e.target?.result
        if (result) {
          const workbook = XLSX.read(result, { type: 'binary' })
          let data: Record<string, any>[] = []
          for (const sheet in workbook.Sheets) {
            // if (workbook.Sheets.hasOwnProperty(sheet)) {
            if (Object.prototype.hasOwnProperty.call(workbook.Sheets, sheet)) {
              const item = XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
              // 将获取到表中的数据转化为json格式
              data = data.concat(item)
            }
          }
          useExcelStore.setState({ data, fieldMap: {} })
        }
      } catch (err) {
        console.error('[err:]', err)
        message.error({ content: '出现错误', duration: 1, key: 'upload' })
      }
    }
    reader.readAsBinaryString(file)
  }
  const beforeUpload = useCallback(async (file: FileType) => {
    const ext = Utils.getFileExtension(file.name)
    const whiteList = ['xlsx', 'xls']
    if (ext && !whiteList.includes(ext)) {
      message.error({ content: '请上传正确的文件', duration: 1, key: 'upload' })
      return false
    }
    await handleExcel(file)
    // window.electron.ipcRenderer.send('ping')
    // window.electron.ipcRenderer.send('parse-excel', file.name)

    return false
  }, [])
  return (
    <Box className={styles.excelTableBox} $flex={true} $isFull={true} $flexDirection={'column'}>
      <div className={styles.actionHeader}>
        <Alert
          style={{ marginBottom: 10 }}
          message="短信模板"
          description={textTemplate}
          type="info"
          showIcon
        />
        <Space>
          <Upload
            accept={'.xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}
            beforeUpload={beforeUpload}
            maxCount={1}
            showUploadList={false}
          >
            <Button>导入Excel</Button>
          </Upload>
          {excelData.length > 0 && <Button onClick={() => setTrue()}>字段配置</Button>}
        </Space>
      </div>
      <div ref={containerRef} className={styles.excelTable}>
        {dataSource.length > 0 ? (
          <Table
            rowKey={'key'}
            scroll={
              size && {
                x: size.width * 0.8,
                y: size.height - 100
              }
            }
            pagination={{
              defaultPageSize: 50
            }}
            bordered={true}
            size={'small'}
            dataSource={dataSource}
            columns={columns}
          />
        ) : (
          <Box
            $isFull={true}
            $flex={true}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Result title="请先上传Excel" />
          </Box>
        )}
      </div>
      <FieldMapModal open={open} close={setFalse} />
    </Box>
  )
}
export default ExcelTablePage
