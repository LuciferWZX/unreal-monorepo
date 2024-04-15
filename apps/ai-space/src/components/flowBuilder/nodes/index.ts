import { NodeTypes } from '@xyflow/react';
import StartNode from './start';
import { CustomFlowNodeType } from '../_constants';

const getNodeTypes = (): NodeTypes => ({
  [CustomFlowNodeType.start]: StartNode,
});
export default getNodeTypes;
