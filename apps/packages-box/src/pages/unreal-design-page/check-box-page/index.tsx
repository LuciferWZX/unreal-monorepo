import { FC } from 'react';
import { Space } from '@arco-design/web-react';
import { Checkbox } from '@wzx-unreal/unreal-design';

const CheckBoxPage: FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ minWidth: 800, minHeight: 500 }}>
        <Space size={'large'} direction={'vertical'}>
          <div>
            <Space>
              <Checkbox>checkbox</Checkbox>
            </Space>
          </div>
        </Space>
      </div>
    </div>
  );
};
export default CheckBoxPage;
