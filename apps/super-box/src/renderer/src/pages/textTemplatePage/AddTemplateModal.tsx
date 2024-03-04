import { FC, useEffect } from 'react'
import { App, Form, Input, Modal } from 'antd'
import { nanoid } from 'nanoid'
import { isUndefined } from '@wzx-unreal/react-hooks'
import useExcelStore from '../../store/useExcelStore'
interface FormProps {
  id?: string
  label: string
  sign: string
  content: string
}
interface IProps {
  open?: boolean
  record?: Record<string, any>
  close?: () => void
  afterClose?: () => void
}
const AddTemplateModal: FC<IProps> = (props) => {
  const { open, close, afterClose, record } = props
  const [form] = Form.useForm<FormProps>()
  const { message } = App.useApp()
  useEffect(() => {
    if (open && record) {
      form.setFieldsValue({ label: record.label, content: record.content })
    }
  }, [open])
  const onFinish = async (values: FormProps) => {
    values.label = values.label.trim()
    values.content = values.content.trim()
    values.sign = values.sign.trim()
    if (isUndefined(record)) {
      const id = nanoid()
      useExcelStore.setState((state) => {
        return {
          textTemplates: state.textTemplates.concat({ id: id, ...values })
        }
      })
      message.success({ content: '添加成功', key: 'success' })
      close?.()
      return
    }
    useExcelStore.setState((state) => {
      return {
        textTemplates: state.textTemplates.map((item) => {
          if (item.id === record.id) {
            return { ...item, ...values }
          }
          return item
        })
      }
    })
    message.success({ content: '更新成功', key: 'success' })
    close?.()
  }
  return (
    <Modal
      open={open}
      title={record ? '编辑模板' : '新建模板'}
      onCancel={close}
      afterOpenChange={(_open) => {
        if (!_open) {
          afterClose?.()
          form.resetFields()
        }
      }}
      onOk={() => form.submit()}
      okText={record ? '更新' : '保存'}
    >
      <Form<FormProps>
        layout={'vertical'}
        form={form}
        onFinish={onFinish}
        initialValues={{
          sign: '【康桥】'
        }}
      >
        <Form.Item
          label={'签名'}
          name={'sign'}
          rules={[
            { required: true, message: '请输入签名' },
            { whitespace: true, message: '请输入签名' }
          ]}
        >
          <Input disabled={true} placeholder={'请输入签名'} />
        </Form.Item>
        <Form.Item
          label={'模板名称'}
          name={'label'}
          rules={[
            { required: true, message: '请输入模板名称' },
            { whitespace: true, message: '请输入模板名称' }
          ]}
        >
          <Input placeholder={'请输入模板名称'} />
        </Form.Item>
        <Form.Item
          label={'模板内容'}
          name={'content'}
          rules={[
            { required: true, message: '请输入模板内容' },
            { whitespace: true, message: '请输入模板内容' }
          ]}
        >
          <Input.TextArea autoSize={{ minRows: 3, maxRows: 6 }} placeholder={'请输入模板内容'} />
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default AddTemplateModal
