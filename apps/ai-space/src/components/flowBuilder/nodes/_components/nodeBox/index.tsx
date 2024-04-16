import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@wzx-unreal/jb-design';
import styles from './index.module.css';
import useNodeState from '../../../_hooks/useNodeState.ts';
interface NodeBoxProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
}

const NodeBox = forwardRef<HTMLDivElement, NodeBoxProps>((props, ref) => {
  const { className, icon, title, children, ...restProps } = props;
  const classes = cn(styles.ai_node_box, className);
  const [node] = useNodeState();
  console.log(13, node);
  return (
    <div className={classes} ref={ref} {...restProps}>
      <div className={cn(styles.ai_node_box_header)}>
        <span className={cn(styles.ai_node_box_icon)}>{icon}</span>
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
});
export default NodeBox;
