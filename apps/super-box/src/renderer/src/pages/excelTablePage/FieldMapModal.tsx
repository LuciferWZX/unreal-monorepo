import { FC, useEffect, useMemo, useState } from 'react'
import { Alert, App, Form, Modal, Select } from 'antd'
import { Utils } from '../../utils'
import useExcelStore from '../../store/useExcelStore'
import styles from './index.module.less'
import { useShallow } from 'zustand/react/shallow'
interface IProps {
  open?: boolean
  close?: () => void
}
const FieldMapModal: FC<IProps> = (props) => {
  const [form] = Form.useForm()
  const { modal } = App.useApp()
  const { open, close } = props
  const [curFieldMap, setCurFieldMap] = useState<Record<string, string>>({})
  const [excelData, TEXT_TEMPLATE, fieldMap] = useExcelStore(
    useShallow((state) => [state.data, state.TEXT_TEMPLATE, state.fieldMap])
  )
  useEffect(() => {
    if (open) {
      setCurFieldMap(fieldMap)
      form.setFieldsValue(fieldMap)
    }
  }, [open])
  const fieldKeys = useMemo(() => {
    const keys: string[] = []
    Utils.formatText(TEXT_TEMPLATE, '[@]', (idx) => {
      keys.push(`#${idx}`)
      return `#${idx}`
    })
    return keys
  }, [excelData])
  const headers = useMemo(() => {
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

  const textTemplate = useMemo(() => {
    const html = Utils.formatText(TEXT_TEMPLATE, '[@]', (idx, value) => {
      if (curFieldMap[`#${idx}`]) {
        const headerKey = curFieldMap[`#${idx}`]
        const targetLabel = headers.find((item) => item.value === headerKey)?.label
        return `<span class="${styles.changedTemplateTag}">${targetLabel}</span>${value}`
      }
      return `<span class="${styles.templateTag}">#${idx}</span>${value}`
    })
    return <div dangerouslySetInnerHTML={{ __html: html }} />
  }, [curFieldMap, excelData])

  const onFinish = (values: Record<string, string>) => {
    let hasUndefinedValue = false
    Object.keys(values).forEach((key) => {
      if (values[key] === undefined) {
        //说明是有wei
        hasUndefinedValue = true
      }
    })
    if (hasUndefinedValue) {
      modal.confirm({
        title: '你确定要继续吗?',
        content: '存在未选择的字段,是否继续?',
        onOk: () => {
          useExcelStore.setState({ fieldMap: values })
          close?.()
        }
      })
      return
    }
    useExcelStore.setState({ fieldMap: values })
    close?.()
  }
  const handleOk = () => {
    form.submit()
  }
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 }
  }
  const afterClose = () => {
    setCurFieldMap({})
    form.resetFields()
  }
  return (
    <Modal
      centered={true}
      width={700}
      title={'字段映射'}
      open={open}
      onCancel={close}
      onOk={handleOk}
      afterClose={afterClose}
    >
      <Alert
        style={{ marginBottom: 10, userSelect: 'text' }}
        message="短信模板"
        description={textTemplate}
        type="info"
        showIcon
      />
      <Form style={{ userSelect: 'text' }} {...layout} form={form} onFinish={onFinish}>
        {fieldKeys.map((fieldKey) => {
          return (
            <Form.Item label={fieldKey} name={fieldKey} key={fieldKey}>
              <Select
                allowClear={true}
                placeholder={'请选择字段'}
                showSearch={true}
                filterOption={filterOption}
                options={headers}
                onChange={(value) => {
                  setCurFieldMap({ ...curFieldMap, [fieldKey]: value })
                }}
              />
            </Form.Item>
          )
        })}
      </Form>
    </Modal>
  )
}
export default FieldMapModal
