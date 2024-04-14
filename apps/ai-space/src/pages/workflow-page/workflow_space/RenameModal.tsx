import { Modal, Input } from '@wzx-unreal/jb-design';
import { FC, useMemo } from 'react';
import useWorkflowTree from '@/pages/workflow-page/workflow_space/useWorkflowTree.tsx';
import { match } from 'ts-pattern';

interface RenameModalProps {
  open?: boolean;
  onOk?: () => void;
  onClose?: () => void;
  workflowKey: string | null;
  afterClose?: () => void;
}
const RenameModal: FC<RenameModalProps> = (props) => {
  const [workflowSpaceData, , , { findWorkflowSpaceDataByKey }] = useWorkflowTree();
  const { open, onClose, onOk, afterClose, workflowKey } = props;
  const target = useMemo(() => {
    return match(workflowKey)
      .with(null, () => undefined)
      .otherwise((_workflowKey) => {
        return findWorkflowSpaceDataByKey(workflowSpaceData, _workflowKey);
      });
  }, [workflowKey]);

  return (
    <Modal
      width={400}
      afterClose={afterClose}
      onClose={onClose}
      open={open}
      onOk={onOk}
      forceRender={true}
      title={'重命名'}
    >
      {match(target)
        .with(undefined, () => null)
        .otherwise((_target) => {
          console.log(1, workflowKey, target);
          return <Input defaultValue={_target.title} block={true} />;
        })}
    </Modal>
  );
};
export default RenameModal;
