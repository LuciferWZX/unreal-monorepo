import { Button, Form, Input, Space, Tooltip } from 'antd';
import { FC, ReactNode, useMemo } from 'react';
import { useSlateStatic } from 'slate-react';
import EditorCommand from '@/core/command';

interface LinkFormTooltipProps {
  children?: ReactNode;
  defaultValue?: LinkFormType;
}
interface LinkFormType {
  title: string;
  link: string;
}
const LinkFormTooltip: FC<LinkFormTooltipProps> = (props) => {
  const { children, defaultValue } = props;
  const editor = useSlateStatic();
  const [form] = Form.useForm<LinkFormType>();
  const onFinish = (values: LinkFormType) => {
    console.log(values);
    EditorCommand.toggleLinkNode(editor, { link: values.link });
  };
  const withInitialValue = useMemo(() => {
    return (
      <Form onFinish={onFinish} form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
        <Form.Item label={'文本'} name={'title'}>
          <Input placeholder={'输入文本'} />
        </Form.Item>
        <Form.Item label={'链接'} style={{ marginBottom: 0 }}>
          <Space>
            <Form.Item name={'link'} noStyle={true}>
              <Input placeholder={'粘贴或者输入链接'} />
            </Form.Item>
            <Form.Item dependencies={['link']} noStyle={true}>
              {({ getFieldValue }) => {
                const link: string | undefined = getFieldValue('link');
                let disabled = true;
                if (link) {
                  disabled = false;
                }
                return (
                  <Button disabled={disabled} htmlType={'submit'} type={'primary'}>
                    确认
                  </Button>
                );
              }}
            </Form.Item>
          </Space>
        </Form.Item>
      </Form>
    );
  }, [form]);
  const title = useMemo(() => {
    return (
      <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item>
          <Input placeholder={'粘贴或者输入链接'} />
        </Form.Item>
      </Form>
    );
  }, []);
  return (
    <Tooltip title={defaultValue ? title : withInitialValue} trigger={['click']} arrow={false}>
      {children}
    </Tooltip>
  );
};
export default LinkFormTooltip;
