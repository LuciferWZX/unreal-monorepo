import { FC } from 'react';
import { Space } from 'antd';
import { Banner } from '@wzx-unreal/jb-design';
const BannerDemo: FC = () => {
  return (
    <div style={{ marginBottom: 20 }}>
      <Space style={{ width: '100%' }} size={30} direction={'vertical'}>
        <Banner
          withIcon={true}
          actionConfig={{
            maxShowAction: 1,
          }}
          actions={[
            { children: 'View Lesson', href: 'https://www.baidu.com' },
            { children: 'Don’t show again', href: '' },
            { children: 'Don’t show again3', href: '' },
            { children: 'Don’t show again4', href: '' },
            {
              children: 'Don’t show again5',
              href: '',
              onClick: () => {
                alert('xx');
              },
            },
          ]}
          title={
            'Interactive lesson available Interactive lesson available Interactive lesson available'
          }
        />
        <Banner
          withIcon={true}
          type={'success'}
          title={'Interactive lesson available'}
          closeIcon={'xxx'}
          onClose={() => {
            alert('close');
          }}
        />
        <Banner withIcon={true} type={'warning'} title={'Interactive lesson available'} />
        <Banner withIcon={true} type={'error'} title={'Interactive lesson available'} />

        <div>
          <Banner
            withIcon={true}
            inline
            style={{ width: 400 }}
            actions={[
              { children: 'View Lesson', href: 'https://www.baidu.com' },
              { children: 'Don’t show again', href: '' },
            ]}
            title={
              'Interactive lesson available Interactive lesson available Interactive lesson available'
            }
          />
        </div>
      </Space>
    </div>
  );
};
export default BannerDemo;
