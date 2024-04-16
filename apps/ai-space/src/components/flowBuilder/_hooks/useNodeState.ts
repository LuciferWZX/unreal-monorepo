import { useNodeId, useNodes, Node } from '@xyflow/react';
import { match } from 'ts-pattern';
import { useMemo } from 'react';

const useNodeState = (): [Node | undefined] => {
  const nodeId = useNodeId();
  const nodes = useNodes();
  const node = useMemo(
    () =>
      match(nodeId)
        .with(null, () => undefined)
        .otherwise((_nodeId) => {
          return nodes.find((node) => node.id === _nodeId);
        }),
    [nodeId, nodes]
  );
  return [node];
};
export default useNodeState;
