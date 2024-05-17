import { Button, Form, Input, Space, Tooltip } from 'antd';
import { FC, ReactNode, useCallback, useMemo } from 'react';
import { useSlateStatic } from 'slate-react';
import EditorCommand from '@/core/command';
import { useBoolean } from '@wzx-unreal/react-hooks';
import { Editor } from 'slate';

interface LinkFormTooltipProps {
  children?: ReactNode;
  defaultValue?: Partial<LinkFormType>;
  disabled?: boolean;
  destroyTooltipOnHide?: boolean;
}
export interface LinkFormType {
  title: string;
  link: string;
}
const LinkFormTooltip: FC<LinkFormTooltipProps> = (props) => {
  const { children, defaultValue, disabled, destroyTooltipOnHide } = props;
  const [open, { set: setOpen }] = useBoolean(false);
  const mergedOpen = useMemo(() => {
    return disabled === true ? false : open;
  }, [open, disabled]);
  const editor = useSlateStatic();
  return (
    <Tooltip
      open={mergedOpen}
      onOpenChange={(_o) => setOpen(_o)}
      title={
        <LinkForm
          editor={editor}
          type={defaultValue?.title ? undefined : 'withTitle'}
          afterFinish={() => setOpen(false)}
        />
      }
      destroyTooltipOnHide={destroyTooltipOnHide}
      trigger={['click']}
      arrow={false}
    >
      {children}
    </Tooltip>
  );
};
interface LinkFormProps {
  editor: Editor;
  afterFinish?: () => void;
  type?: 'withTitle';
  defaultValue?: Partial<LinkFormType>;
}
export const LinkForm: FC<LinkFormProps> = (props) => {
  const { editor, afterFinish, defaultValue, type } = props;
  const [form] = Form.useForm<LinkFormType>();
  const onFinish = useCallback(
    (values: LinkFormType) => {
      const title = values.title ?? defaultValue?.title;
      EditorCommand.toggleLinkNode(editor, { link: values.link, title: title });
      afterFinish?.();
    },
    [afterFinish, defaultValue, editor]
  );
  const withTitle = useMemo(() => {
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
  }, [form, onFinish]);
  const justLink = useMemo(() => {
    return (
      <Form onFinish={onFinish} form={form} layout={'inline'}>
        <Form.Item>
          <Form.Item name={'link'} noStyle={true}>
            <Input placeholder={'粘贴或者输入链接'} />
          </Form.Item>
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
      </Form>
    );
  }, [form, onFinish]);
  return type === 'withTitle' ? withTitle : justLink;
};
export default LinkFormTooltip;
