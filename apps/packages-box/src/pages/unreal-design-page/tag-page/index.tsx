import { FC } from 'react';
import { Button, Tag, Tooltip } from '@wzx-unreal/unreal-design';
import { Space } from '@arco-design/web-react';

const TagPage: FC = () => {
  return (
    <div style={{ flex: 1, padding: 20 }}>
      <Space>
        <Tag variant="secondary">secondary</Tag>
        <Tag variant={'destructive'}>destructive</Tag>
        <Tag variant="outline">outline</Tag>
        <Tag variant="default">default</Tag>
      </Space>
      <div style={{ height: 20 }} />
      <Space>
        <div style={{ width: 200, overflow: 'hidden' }}>
          <Tooltip
            tooltipContent={
              '这是很长的文字这是很长的文字这是很长的文字这是很长的文字这是很长的文字'
            }
            matchTriggerWidth={true}
            // trigger={{
            //   asChild: false,
            // }}
          >
            <Tag
              onClose={(e) => {
                e.stopPropagation(); //防止触发下面的click事件
                console.log(111, e);
              }}
              onClick={(e) => {
                console.log(222, e);
              }}
              closeIcon={true}
              style={{ width: '100%' }}
              widthProps={{ eclipse: true }}
            >
              这是很长的文字这是很长的文字这是很长的文字这是很长的文字这是很长的文字
            </Tag>
          </Tooltip>
          <Tooltip tooltipContent={'提示内容'}>
            <Button variant={'outline'}>默认</Button>
          </Tooltip>
        </div>
      </Space>
    </div>
  );
};
export default TagPage;
