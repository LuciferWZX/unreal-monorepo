import { ChangeEvent, FC, useCallback } from 'react';
import { Handle, NodeProps, Position, Node } from '@xyflow/react';
import memoWithNoPosition from '../../_utils/memoWithNoPosition.ts';
import { NodeBox } from '../_components';
interface StartDataType extends Record<string, unknown> {
  first: string;
}
const StartNode: FC<NodeProps<Node<StartDataType>>> = memoWithNoPosition((props) => {
  console.log(1, props);
  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);
  return (
    <>
      <NodeBox>
        <label htmlFor="text">start Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </NodeBox>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
});
export default StartNode;
