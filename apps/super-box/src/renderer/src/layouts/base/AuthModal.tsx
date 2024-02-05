import { FC, useMemo } from 'react'
import { App, Form, Input, Modal } from 'antd'
import useAppStore from '../../store/useAppStore'
import { useShallow } from 'zustand/react/shallow'
interface FormValueProps {
  account: string
  password: string
  extNo: string
  smsUrl: string
}
const DEFAULT_INFO = {
  account: '109993',
  password: 'zdC4P4',
  extNo: '10690565913',
  smsUrl: 'http://39.107.242.113:7862'
}
const AuthModal: FC = () => {
  const { message } = App.useApp()
  const [form] = Form.useForm<FormValueProps>()
  const [account, password, extNo, smsUrl, open] = useAppStore(
    useShallow((state) => [
      state.account,
      state.password,
      state.extNo,
      state.smsUrl,
      state.settingOpen
    ])
  )
  const hasValue = useMemo(
    () => account !== '' && password !== '' && extNo !== '' && smsUrl !== '',
    [account, password, extNo, smsUrl]
  )
  // const account = '109993'
  // const password = 'zdC4P4'
  // const extno = '10690565913'
  const onFinish = async (values: FormValueProps) => {
    useAppStore.setState({
      ...values,
      settingOpen: false
    })
    message.success('保存成功')
  }
  return (
    <Modal
      title={'必要信息'}
      open={open}
      centered={true}
      onCancel={() => useAppStore.setState({ settingOpen: false })}
      cancelButtonProps={{
        onClick: () => {
          form.resetFields()
        }
      }}
      cancelText={'还原初始值'}
      closeIcon={hasValue ? undefined : false}
      okText={'保存'}
      onOk={() => form.submit()}
    >
      <Form<FormValueProps>
        layout={'vertical'}
        form={form}
        onFinish={onFinish}
        initialValues={{
          ...DEFAULT_INFO
        }}
      >
        <Form.Item
          label="账户"
          name="account"
          rules={[
            { required: true, message: '请输入账户' },
            { whitespace: true, message: '请输入账户' }
          ]}
        >
          <Input placeholder={'109993'} />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: '请输入密码' },
            { whitespace: true, message: '请输入密码' }
          ]}
        >
          <Input.Password placeholder={'zdC4P4'} />
        </Form.Item>
        <Form.Item
          label="接入号"
          name="extNo"
          rules={[
            { required: true, message: '请输入接入号' },
            { whitespace: true, message: '请输入接入号' }
          ]}
        >
          <Input placeholder={'10690565913'} />
        </Form.Item>
        <Form.Item
          label="接口地址"
          name="smsUrl"
          rules={[
            { required: true, message: '请输入接口地址' },
            { whitespace: true, message: '请输入接口地址' }
          ]}
        >
          <Input placeholder={'http://39.107.242.113:7862'} />
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default AuthModal
