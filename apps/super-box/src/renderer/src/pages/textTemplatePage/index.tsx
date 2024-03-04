import { FC, useState } from 'react'
import { Box } from '../../styles'
import styles from './index.module.less'
import { App, Button, Card, Col, Flex, Row, Space, Typography } from 'antd'
import useExcelStore from '../../store/useExcelStore'
import { useShallow } from 'zustand/react/shallow'
import { Pencil, Trash2 } from 'lucide-react'
import AddTemplateModal from './AddTemplateModal'
import { useBoolean } from '@wzx-unreal/react-hooks'
const { Paragraph } = Typography
const TextTemplatePage: FC = () => {
  const { modal, message } = App.useApp()
  const [open, { setTrue, setFalse }] = useBoolean(false)
  const [record, setRecord] = useState<Record<string, any> | undefined>(undefined)
  const [textTemplates] = useExcelStore(useShallow((state) => [state.textTemplates]))
  const addTemplate = () => {
    setRecord(undefined)
    setTrue()
  }
  const afterClose = () => {
    setRecord(undefined)
  }
  return (
    <Box $flex={true} $flexDirection={'column'} $isFull={true} className={styles.templateBox}>
      <Flex className={styles.templateBoxHeader}>
        <Button onClick={addTemplate} type={'primary'}>
          新建模板
        </Button>
      </Flex>
      <div className={styles.templateBoxContent}>
        <Row gutter={[10, 10]}>
          {textTemplates.map((template) => {
            return (
              <Col xs={12} sm={12} md={12} lg={8} xl={6} key={template.id}>
                <Card
                  size={'small'}
                  title={template.label}
                  bordered={false}
                  className={styles.contentItem}
                  extra={
                    <Space>
                      <Button
                        onClick={() => {
                          setRecord(template)
                          setTrue()
                        }}
                        icon={<Pencil className={'anticon'} size={16} />}
                        size={'small'}
                        shape={'circle'}
                        type={'link'}
                      />
                      <Button
                        onClick={() => {
                          modal.confirm({
                            title: '确定删除吗?',
                            okButtonProps: {
                              danger: true
                            },
                            okText: '删除',
                            onOk: async () => {
                              useExcelStore.setState((state) => {
                                return {
                                  textTemplates: state.textTemplates.filter(
                                    (item) => item.id !== template.id
                                  )
                                }
                              })
                              message.success({ content: '删除成功', key: 'success' })
                            }
                          })
                        }}
                        size={'small'}
                        type={'link'}
                        shape={'circle'}
                        danger={true}
                        icon={<Trash2 className={'anticon'} size={16} />}
                      />
                    </Space>
                  }
                >
                  <Paragraph
                    ellipsis={{
                      rows: 3,
                      tooltip: true
                    }}
                  >
                    {template.content}
                  </Paragraph>
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
      <AddTemplateModal record={record} close={setFalse} open={open} afterClose={afterClose} />
    </Box>
  )
}
export default TextTemplatePage
