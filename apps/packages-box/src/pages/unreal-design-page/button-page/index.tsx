import { FC } from 'react';
import { Button, Icon } from '@wzx-unreal/unreal-design';
import { Space } from '@arco-design/web-react';

const ButtonPage:FC = () => {

  return(
    <div>
      <Space size={'large'} direction={'vertical'}>

        <div>
          <Space >
            尺寸：
            <Button size={'sm'} variant={'default'}>
              small
            </Button>
            <Button size={'default'} variant={'default'}>
              default
            </Button>
            <Button size={'lg'} variant={'default'}>
              lg
            </Button>
          </Space>
        </div>
        <div>
          <Space >
            形状：
            <Button size={'sm'} shape={'circle'} variant={'destructive'}>
              sm
            </Button>
            <Button size={'default'} shape={'square'} variant={'secondary'}>
              default
            </Button>
            <Button size={'lg'} shape={'circle'} variant={'default'}>
              lg
            </Button>
            <Button shape={'square'} variant={'outline'}>
              outline
            </Button>
            <Button shape={'square'} variant={'ghost'}>
              ghost
            </Button>
            <Button shape={'square'} variant={'link'}>
              link
            </Button>
          </Space>
        </div>
        <div>
          <Space >
            icon true：
            <Button icon={true} size={'sm'} variant={'default'}>
              <Icon name={'code'}  />
            </Button>
            <Button icon={true} variant={'default'}>
              <Icon name={'cable'}  />
            </Button>
            <Button size={'lg'} icon={true} variant={'default'}>
              <Icon name={'align-center'}  />
            </Button>
            with icon
            <Button variant={'default'}>
              <Icon name={'smile-plus'} style={{width:16,marginRight:6}}  />你好
            </Button>
          </Space>
        </div>
        <div>
          <Space >
            状态：
            <Button disabled={true}  variant={'default'}>
              disabled
            </Button>
            <Button loading={true}  variant={'default'}>
              loading
            </Button>
          </Space>
        </div>
      </Space>
    </div>
  )
}
export default ButtonPage