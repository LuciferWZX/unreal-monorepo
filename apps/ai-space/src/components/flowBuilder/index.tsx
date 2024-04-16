import { FC } from 'react';
import styles from './index.module.css';
import { Background, Controls, ReactFlow, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './flow.css';
import useFlowState from '@/components/flowBuilder/_hooks/useFlowState.ts';
import ConfigPanel from '@/components/flowBuilder/configPanel';
const FlowBuilder: FC = () => {
  const { nodes, edges, nodeTypes, onNodesChange, onEdgesChange, onConnect } = useFlowState();

  return (
    <div className={styles.ai_builder_box}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
          <ConfigPanel />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};
export default FlowBuilder;
