import { FC, useState } from 'react';
import { Button, Checkbox, Dialog } from '@wzx-unreal/unreal-design';
import { useBoolean } from '@wzx-unreal/react-hooks';
import { Space } from '@arco-design/web-react';
import { IconClose } from '@arco-design/web-react/icon';
import './index.less';
const DialogPage: FC = () => {
  const [open, { set }] = useBoolean(false);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  return (
    <div style={{ flex: 1, padding: 20 }}>
      <Space>
        受控
        <Checkbox checked={open} onCheckedChange={set}>
          open
        </Checkbox>
        <Dialog
          open={open}
          styles={{
            cancelButton: {
              display: 'none',
            },
          }}
          title={'Share link'}
          onClose={() => set(false)}
          description={'Anyone who has this link will be able to view this.'}
          content={'https://www.baidu.com'}
        ></Dialog>
      </Space>
      <div />
      <Space>
        非受控
        <Dialog
          closeIcon={<IconClose />}
          title={'Share link'}
          classNames={{
            overlay: 'DialogOverlay',
            content: 'DialogContent',
          }}
          description={'Anyone who has this link will be able to view this.'}
          onOk={(e) => {
            console.log(111, e);
          }}
        >
          <Button>打开</Button>
        </Dialog>
      </Space>
      <Space>
        <div
          ref={setContainer}
          style={{ width: 400, height: 400, border: '1px solid gray', position: 'relative' }}
          id={'freeland'}
        ></div>
        挂载到其他地方
        <Dialog
          closeIcon={<IconClose />}
          container={container}
          title={'Share link'}
          description={'Anyone who has this link will be able to view this.'}
          content={'https://www.baidu.com'}
        >
          <Button>打开</Button>
        </Dialog>
      </Space>
    </div>
  );
};
export default DialogPage;
