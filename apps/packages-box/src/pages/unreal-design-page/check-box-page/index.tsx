import { FC, useState } from 'react';
import { Space } from '@arco-design/web-react';
import { Checkbox } from '@wzx-unreal/unreal-design';

const CheckBoxPage: FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ minWidth: 800, minHeight: 500 }}>
        <Space size={'large'} direction={'vertical'}>
          <div>
            <Space>
              indeterminate:
              <Checkbox indeterminate={true}>选项1</Checkbox>
            </Space>
          </div>
          <div>
            <Space>
              checkbox:
              <Checkbox>选项1</Checkbox>
              <Checkbox>选项2</Checkbox>
              <Checkbox>选项3</Checkbox>
            </Space>
          </div>
          <CheckBoxGroupDemo />
        </Space>
      </div>
    </div>
  );
};
const CheckBoxGroupDemo: FC = () => {
  const [v1, setV1] = useState<string[]>([]);
  const [v2, setV2] = useState<number[]>([]);
  const [v3, setV3] = useState<number[]>([]);
  return (
    <div>
      <div>v1:{JSON.stringify(v1)}</div>
      <div>v2:{JSON.stringify(v2)}</div>
      <div>v3:{JSON.stringify(v3)}</div>
      <Space>
        checkbox:
        <Checkbox.Group onChange={setV1} options={['Group选项1', 'Group选项2', 'Group选项3']} />
        <Checkbox.Group onChange={setV2} options={[1, 2, 3]} />
        <Checkbox.Group
          onChange={setV3}
          options={[
            { label: 'Group选项1', value: 'id-1' },
            { label: 'Group选项2', value: 'id-2' },
            { label: 'Group选项3', value: 'id-3' },
          ]}
        />
      </Space>
      <Space>
        disabled:
        <Checkbox.Group disabled={true} options={['Group选项1', 'Group选项2', 'Group选项3']} />
        <Checkbox.Group
          options={[
            'Group选项1',
            { label: 'Group选项2(禁用)', value: 'id-2', disabled: true },
            'Group选项3',
          ]}
        />
      </Space>
    </div>
  );
};
export default CheckBoxPage;
