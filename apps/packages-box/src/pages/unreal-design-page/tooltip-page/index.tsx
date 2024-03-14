import { FC } from 'react';
import { Button, Tooltip, TooltipProvider } from '@wzx-unreal/unreal-design';
import { Space } from '@arco-design/web-react';

const TooltipPage: FC = () => {
  return (
    <div style={{ flex: 1, padding: 20 }}>
      <div style={{ height: 300, overflow: 'auto', marginTop: 300 }}>
        <div style={{ height: 600 }}>
          <Space>
            <TooltipProvider delayDuration={0}>
              <Tooltip tooltipContent={'提示内容'}>
                <Button variant={'outline'}>默认</Button>
              </Tooltip>
            </TooltipProvider>
            <Tooltip tooltipContent={'提示内容'}>
              <Button variant={'outline'} disabled={true}>
                disabled
              </Button>
            </Tooltip>
            <Tooltip tooltipContent={'上'} side={'top'}>
              <Button variant={'outline'}>上</Button>
            </Tooltip>
            <Tooltip tooltipContent={'下'} side={'bottom'}>
              <Button variant={'outline'}>下</Button>
            </Tooltip>
            <Tooltip tooltipContent={'左'} side={'left'}>
              <Button variant={'outline'}>左</Button>
            </Tooltip>
            <Tooltip tooltipContent={'右'} side={'right'}>
              <Button variant={'outline'}>右</Button>
            </Tooltip>

            <Tooltip tooltipContent={'start'} align={'start'}>
              <Button variant={'outline'}>start</Button>
            </Tooltip>
            <Tooltip tooltipContent={'center'} align={'center'}>
              <Button variant={'outline'}>center</Button>
            </Tooltip>
            <Tooltip matchTriggerWidth={true} tooltipContent={'end'} align={'end'}>
              <Button variant={'outline'}>end</Button>
            </Tooltip>
            <Tooltip tooltipContent={'提示内容'} open={true}>
              <Button variant={'outline'}>open</Button>
            </Tooltip>
          </Space>
        </div>
      </div>
    </div>
  );
};
export default TooltipPage;
