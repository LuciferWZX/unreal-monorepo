import { FC } from 'react';
import { Button, Checkbox, Input, Popover } from '@wzx-unreal/unreal-design';
import { useBoolean } from '@wzx-unreal/react-hooks';

const PopoverPage: FC = () => {
  const [disabled, { set }] = useBoolean(false);
  const [isModal, { set: setIsModal }] = useBoolean(false);
  return (
    <div style={{ width: '800px', height: '600px', padding: 20, overflow: 'auto' }}>
      <div>
        <Checkbox onCheckedChange={set} checked={disabled}>
          禁用
        </Checkbox>
        <Checkbox onCheckedChange={setIsModal} checked={isModal}>
          是否是Modal
        </Checkbox>
      </div>
      <div>
        <Popover
          side={'right'}
          align={'start'}
          modal={isModal}
          popContent={
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <span>Width</span>
                  <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <span>Max. width</span>
                  <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <span>Height</span>
                  <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <span>Max. height</span>
                  <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
                </div>
              </div>
            </div>
          }
        >
          <Button disabled={disabled} variant={'outline'}>
            触发
          </Button>
        </Popover>
      </div>
    </div>
  );
};
export default PopoverPage;
