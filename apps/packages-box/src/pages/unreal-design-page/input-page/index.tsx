import { FC } from 'react';
import { Space } from '@arco-design/web-react';
import { CircleSlash2 } from 'lucide-react';
import { Button, Input } from '@wzx-unreal/unreal-design';
const InputPage:FC = () => {

  return(
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{minWidth:800,minHeight:500}}>
        <Space size={'large'} direction={'vertical'}>

          <div>
            <Space >
              allowClear
              <Input allowClear={true} placeholder={'请输入'}  />
              diabled
              <Input value={'aaa'} allowClear={true} disabled={true} placeholder={'请输入'}  />
              custom ClearIcon
              <Input
                placeholder={'请输入'}
                allowClear={{
                  clearIcon:<CircleSlash2 style={{width:16,height:16}} />
                }}  />

            </Space>
            <Space >
              allowClear
              <Input type={'password'} placeholder={'请输入'}/>


            </Space>
          </div>
        </Space>
      </div>
    </div>
  )
}
export default InputPage