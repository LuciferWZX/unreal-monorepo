import { FC } from 'react';
import { Handle, NodeProps, Position, Node } from '@xyflow/react';
import memoWithNoPosition from '../../_utils/memoWithNoPosition.ts';
import { NodeBox } from '../_components';
import { BaseNodeDataType } from '../../_constants/NodeDataType.ts';
import { CustomFlowNodeType } from '../../_constants';
import startIcon from '../../_icons/start.svg';
interface StartDataType extends BaseNodeDataType {
  type: CustomFlowNodeType.start;
}
const StartNode: FC<NodeProps<Node<StartDataType>>> = memoWithNoPosition((props) => {
  const { title } = props.data;

  return (
    <>
      <NodeBox node={props} icon={<img src={startIcon} alt={'start'} />} title={title}>
        xx
      </NodeBox>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
});
export default StartNode;
