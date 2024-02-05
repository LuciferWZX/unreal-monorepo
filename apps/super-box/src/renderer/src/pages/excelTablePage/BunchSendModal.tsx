import { FC, useMemo } from 'react'
import { Modal, Progress, Space } from 'antd'
import { useBunchSend } from './useBunchSend'

interface IProps {
  open?: boolean
  close?: () => void
  dataSource: Record<string, any>[]
}
const BunchSendModal: FC<IProps> = (props) => {
  const { open, close, dataSource } = props
  const [bunchloading, successCount, { bunchSend, setCountNumber }] = useBunchSend()
  const handleOk = () => {
    bunchSend(dataSource)
  }
  const percent = useMemo(() => {
    return Number(((successCount / dataSource.length) * 100).toFixed(2))
  }, [dataSource.length, successCount])
  return (
    <Modal
      okButtonProps={{ disabled: bunchloading }}
      cancelButtonProps={{ disabled: bunchloading }}
      open={open}
      title={'一键发送'}
      afterClose={() => {
        setCountNumber(0)
      }}
      okText={'发送'}
      maskClosable={false}
      closeIcon={null}
      onCancel={close}
      onOk={handleOk}
    >
      <Space style={{ width: '100%' }} direction={'vertical'}>
        <span>
          {successCount}/{dataSource.length}
        </span>
        <Progress strokeLinecap="butt" percent={percent} />
      </Space>
    </Modal>
  )
}
export default BunchSendModal
