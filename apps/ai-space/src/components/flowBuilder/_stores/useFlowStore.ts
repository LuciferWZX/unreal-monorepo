import { create } from 'zustand';
import {
  Node,
  NodeProps
} from '@xyflow/react';
import { BaseNodeDataType } from '@/components/flowBuilder/_constants/NodeDataType.ts';

interface FlowStoreType {
  selectedNode:NodeProps<Node<BaseNodeDataType>>|undefined
}
interface FlowStoreActionsType {}
const initialValue: FlowStoreType = {
  selectedNode:undefined,
};
const useFlowStore = create<FlowStoreType & FlowStoreActionsType>(() => ({
  ...initialValue,
}));
export default useFlowStore;
