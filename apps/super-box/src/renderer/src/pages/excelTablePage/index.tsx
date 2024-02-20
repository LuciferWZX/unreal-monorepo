import {
  Alert,
  App,
  Button,
  GetProp,
  Input,
  Radio,
  Result,
  Select,
  Skeleton,
  Space,
  Table,
  Tooltip,
  Upload,
  UploadProps
} from 'antd'
import { Box } from '../../styles'
import styles from './index.module.less'
import { useCallback, useMemo, useRef, useState } from 'react'
import { Utils } from '../../utils'
import * as XLSX from 'xlsx'
import useExcelStore from '../../store/useExcelStore'
import { useShallow } from 'zustand/react/shallow'
import { useBoolean, useDebounceFn, useSize } from '@unreal/react-hooks'
import FieldMapModal from './FieldMapModal'
import EditableText from './EditableText'
import SendButton from './SendButton'
import BunchSendModal from './BunchSendModal'
import { Info } from 'lucide-react'
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]
const ExcelTablePage = () => {
  const { message } = App.useApp()
  const containerRef = useRef<HTMLDivElement>(null)
  const [excelData, TEXT_TEMPLATE, fieldMap, phoneColumn, textTemplates, curTemplateId] =
    useExcelStore(
      useShallow((state) => [
        state.data,
        state.TEXT_TEMPLATE,
        state.fieldMap,
        state.phoneColumn,
        state.textTemplates,
        state.curTemplateId
      ])
    )

  const size = useSize(containerRef)
  const [open, { setTrue, setFalse }] = useBoolean(false)
  const [keyword, setKeyword] = useState<string>('')
  const [bunchOpen, { setTrue: setBunchTrue, setFalse: setBunchFalse }] = useBoolean(false)
  const { run } = useDebounceFn(
    (val: string) => {
      setKeyword(val)
    },
    { wait: 400 }
  )
  /**
   * excel真实数据
   */
  const dataSource = useMemo(() => {
    const tempMap = {}
    return excelData.map((obj, idx) => {
      const renamedObj = {
        key: idx
      }
      Object.keys(obj).forEach((key, index) => {
        if (idx === 0) {
          renamedObj[`H${index + 1}`] = obj[key]
          tempMap[`H${index + 1}`] = key
        } else {
          Object.keys(tempMap).forEach((mapKey) => {
            if (tempMap[mapKey] === key) {
              renamedObj[mapKey] = obj[key]
            }
          })
        }
      })

      return renamedObj
    })
  }, [excelData])
  const tableData = useMemo(() => {
    return keyword === ''
      ? dataSource
      : dataSource.filter((item) => {
          let flag = false
          Object.keys(item).forEach((key) => {
            const val = item[key].toString().toLowerCase()
            if (val.includes(keyword.toLowerCase())) {
              flag = true
            }
          })
          return flag
        })
  }, [keyword, dataSource])
  /**
   * excel表头
   */
  const columns = useMemo(() => {
    if (excelData.length > 0) {
      const keys = Object.keys(excelData[0])
      return keys
        .map((key, index) => {
          return {
            title: <Radio value={`H${index + 1}`}>{key}</Radio>,
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
          width: 150,
          render: (_, record) => {
            const tempMap = {}
            Object.keys(fieldMap).forEach((key) => {
              tempMap[key] = record[fieldMap[key]]
            })
            const text = Utils.formatText(TEXT_TEMPLATE, '[@]', (idx, value) => {
              if (tempMap[`#${idx}`]) {
                let val = tempMap[`#${idx}`]
                val = typeof val === 'number' ? val.toFixed(2) : val
                return `${val}${value}`
              }
              return `0${value}`
            })
            return (
              <Space align={'center'}>
                <Tooltip title={text}>
                  <Info size={16} />
                </Tooltip>
                <SendButton record={record} />
              </Space>
            )
          }
        } as any)
    }
    return []
  }, [excelData, TEXT_TEMPLATE, fieldMap])
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
    const html = Utils.formatText(TEXT_TEMPLATE, '[@]', (idx, value) => {
      if (fieldMap[`#${idx}`]) {
        const headerKey = fieldMap[`#${idx}`]
        const targetLabel = headers2.find((item) => item.value === headerKey)?.label
        return `<span class="${styles.changedTemplateTag}">${targetLabel}</span>${value}`
      }
      return `<span class="${styles.templateTag}">#${idx}</span>${value}`
    })
    return <div dangerouslySetInnerHTML={{ __html: html }} />
  }, [fieldMap, TEXT_TEMPLATE, headers2])
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
          useExcelStore.setState({ data })
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
  const validateDataSource = useMemo(
    () =>
      phoneColumn
        ? dataSource.filter((item: Record<string, any>) => {
            return item[phoneColumn]
          })
        : [],
    [dataSource, phoneColumn]
  )
  return (
    <Box className={styles.excelTableBox} $flex={true} $isFull={true} $flexDirection={'column'}>
      <div className={styles.actionHeader}>
        <Alert
          style={{ marginBottom: 10, userSelect: 'text' }}
          message={
            <Space>
              短信模板
              <Select
                style={{ minWidth: 200 }}
                popupMatchSelectWidth={true}
                value={curTemplateId}
                onChange={(value) => useExcelStore.setState({ curTemplateId: value })}
                placeholder={'请选择模板'}
                options={textTemplates.map((item) => ({ label: item.label, value: item.id }))}
              />
            </Space>
          }
          description={textTemplate}
          type="info"
          showIcon
        />
        <Space>
          <Input
            onChange={useCallback((e) => run(e.target.value), [])}
            placeholder={'请输入需要查询的字符串'}
            allowClear={true}
          />
          <Upload
            accept={'.xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}
            beforeUpload={beforeUpload}
            maxCount={1}
            showUploadList={false}
          >
            <Button>导入Excel</Button>
          </Upload>
          {excelData.length > 0 && (
            <>
              <Button onClick={() => setTrue()}>字段配置</Button>
              <Button
                onClick={async () => {
                  if (!phoneColumn) {
                    message.error({ content: '请先选择手机号字段', key: 'phone' })
                    return
                  }
                  setBunchTrue()
                }}
              >
                一键发送
              </Button>
            </>
          )}
        </Space>
      </div>
      <div ref={containerRef} className={styles.excelTable}>
        {dataSource.length > 0 ? (
          <Radio.Group
            value={phoneColumn}
            onChange={(e) => {
              useExcelStore.setState({ phoneColumn: e.target.value })
            }}
            style={{ width: '100%', height: '100%', userSelect: 'text' }}
          >
            {size ? (
              <Table
                rowKey={'key'}
                scroll={
                  size && {
                    x: size.width * 0.8,
                    y: size.height - 100
                  }
                }
                pagination={{
                  defaultPageSize: 50,
                  showTotal: (total) => `共${total}条`
                }}
                bordered={true}
                size={'small'}
                dataSource={tableData}
                columns={columns}
              />
            ) : (
              <Skeleton active={true} />
            )}
          </Radio.Group>
        ) : (
          <Box
            $isFull={true}
            $flex={true}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Result title="请先导入Excel" />
          </Box>
        )}
      </div>
      <FieldMapModal open={open} close={setFalse} />
      <BunchSendModal dataSource={validateDataSource} open={bunchOpen} close={setBunchFalse} />
    </Box>
  )
}
export default ExcelTablePage
