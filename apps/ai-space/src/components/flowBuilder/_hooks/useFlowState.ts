import { useCallback, useMemo, useState } from 'react';
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

const useFlowState = () => {
  const initialNodes: Node[] = [
    {
      id: '1',
      type: CustomFlowNodeType.start,
      position: { x: 0, y: 0 },
      data: {
        label: 'Start',
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
