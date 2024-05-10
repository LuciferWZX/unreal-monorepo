import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import {NodeProps,Node} from '@xyflow/react'
import { cn } from '@wzx-unreal/jb-design';
import styles from './index.module.css';
import useFlowStore from '@/components/flowBuilder/_stores/useFlowStore.ts';
import { BaseNodeDataType } from '@/components/flowBuilder/_constants/NodeDataType.ts';
interface NodeBoxProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  node:NodeProps<Node<BaseNodeDataType>>
}

const NodeBox = forwardRef<HTMLDivElement, NodeBoxProps>((props, ref) => {
  const { className,node, icon, title, children, ...restProps } = props;
  const classes = cn(styles.ai_node_box, className);
  console.log("[NodeBox渲染]", node);
  const handleNodeClick=()=>{
    useFlowStore.setState({
      selectedNode:node
    })
  }
  return (
    <div onClick={handleNodeClick} className={classes} ref={ref} {...restProps}>
      <div className={cn(styles.ai_node_box_header)}>
        <span className={cn(styles.ai_node_box_icon)}>{icon}</span>
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
});
export default NodeBox;
