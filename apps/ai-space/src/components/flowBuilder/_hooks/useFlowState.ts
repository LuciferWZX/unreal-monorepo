import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
} from '@xyflow/react';
import { CustomFlowNodeType } from '../_constants';
import getNodeTypes from '../nodes';
import { BaseNodeDataType } from '@/components/flowBuilder/_constants/NodeDataType.ts';
import { getId } from '@/utils';
import useFlowStore from '@/components/flowBuilder/_stores/useFlowStore.ts';

const useFlowState = () => {
  const initialNodes: Node<BaseNodeDataType>[] = [
    {
      id: getId(15, 'start_'),
      type: CustomFlowNodeType.start,
      position: { x: 0, y: 0 },
      data: {
        title: '开始',
      },
    },
  ];
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>([]);
  const nodeTypes = useMemo(() => getNodeTypes(), []);
  const onNodesChange = useCallback(
    (changes: NodeChange<Node>[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange<Edge>[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    nodeTypes,
  };
};
export default useFlowState;
