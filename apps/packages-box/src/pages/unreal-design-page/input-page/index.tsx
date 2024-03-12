import { FC } from 'react';
import { Checkbox, Space } from '@arco-design/web-react';
import { CircleSlash2 } from 'lucide-react';
import { Input } from '@wzx-unreal/unreal-design';
import { useBoolean } from '@wzx-unreal/react-hooks';
const InputPage: FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ minWidth: 800, minHeight: 500 }}>
        <Space size={'large'} direction={'vertical'}>
          <div>
            <Space>
              allowClear
              <Input allowClear={true} placeholder={'请输入'} />
              diabled
              <Input value={'aaa'} allowClear={true} disabled={true} placeholder={'请输入'} />
              custom ClearIcon
              <Input
                placeholder={'请输入'}
                allowClear={{
                  clearIcon: <CircleSlash2 style={{ width: 16, height: 16 }} />,
                }}
              />
            </Space>
          </div>
          <div>
            <TextAreaDemo />
          </div>
        </Space>
      </div>
    </div>
  );
};
function TextAreaDemo() {
  const [disabled, { set: setDisabled }] = useBoolean(false);
  const [allowClear, { set: setAllowClear }] = useBoolean(false);
  return (
    <Space>
      <Checkbox checked={disabled} onChange={setDisabled}>
        禁用
      </Checkbox>
      <Checkbox checked={allowClear} onChange={setAllowClear}>
        allowClear
      </Checkbox>
      Textarea
      <Input.TextArea disabled={disabled} allowClear={allowClear} placeholder={'请输入'} />
      custom Icon
      <Input.TextArea
        disabled={disabled}
        allowClear={allowClear && { clearIcon: <CircleSlash2 /> }}
        placeholder={'请输入'}
      />
    </Space>
  );
}
export default InputPage;
