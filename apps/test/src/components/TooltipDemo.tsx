import { FC } from 'react';
import { Space } from 'antd';
import { Link, Tooltip } from '@wzx-unreal/jb-design';
const TooltipDemo: FC = () => {
  return (
    <div>
      <Space size={280} wrap={true}>
        <Tooltip
          title={'Header'}
          content={'Explain behavior that is not clear from the setting or action name.'}
          shortcut={'Ctrl + H'}
          link={{
            href: '',
            title: 'External',
            children: 'External',
            suffix: [{ type: 'arrow-top-right' }],
          }}
        >
          <Link href="https://www.baidu.com">tooltip-help</Link>
        </Tooltip>
        <Tooltip title={'Action name'} shortcut={'Ctrl + A'}>
          <Link href="https://www.baidu.com">Tooltip / Tooltip</Link>
        </Tooltip>
        <Tooltip title={'Validation warning'} type={'error'}>
          <Link href="https://www.baidu.com">Validation error</Link>
        </Tooltip>
        <Tooltip title={'Validation warning'} type={'warning'}>
          <Link href="https://www.baidu.com">Validation warning</Link>
        </Tooltip>

        <Tooltip
          title={'Welcome to Our Website!'}
          content={
            'Explore our wide range of products and services to find exactly what you need. We are dedicated to providing the best solutions for our customers.'
          }
          footer={'Important Information'}
          type={'more-info'}
        >
          <Link href="https://www.baidu.com">more-info</Link>
        </Tooltip>

        <Tooltip
          title={'Error Occurred'}
          content={
            'We apologize for the inconvenience. An error has occurred while processing your request. Please try again later.'
          }
          footer={'Error Details'}
          type={'more-info-error'}
        >
          <Link href="https://www.baidu.com">more-info-error</Link>
        </Tooltip>
        <Tooltip
          title={'Warning: Action Required'}
          content={
            'Please note that the information you provided requires attention. Take necessary steps to ensure that your data is accurate and up to date.'
          }
          footer={'Important Warning'}
          type={'more-info-warning'}
        >
          <Link href="https://www.baidu.com">more-info-warning</Link>
        </Tooltip>
        <Tooltip
          title={'Success'}
          content={'Congratulations! Your request has been successfully processed.'}
          footer={'Success Message'}
          type={'more-info-success'}
        >
          <Link href="https://www.baidu.com">more-info-success</Link>
        </Tooltip>

        <Tooltip title={'Success'} arrow={true}>
          <Link href="https://www.baidu.com">custom color</Link>
        </Tooltip>
      </Space>
    </div>
  );
};
export default TooltipDemo;
