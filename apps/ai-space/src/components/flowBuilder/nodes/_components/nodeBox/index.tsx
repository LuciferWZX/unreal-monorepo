import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@wzx-unreal/jb-design';
import styles from './index.module.css';
interface NodeBoxProps extends HTMLAttributes<HTMLDivElement> {}

const NodeBox = forwardRef<HTMLDivElement, NodeBoxProps>((props, ref) => {
  const { className, ...restProps } = props;
  const classes = cn(styles.ai_node_box, className);
  return <div className={classes} ref={ref} {...restProps} />;
});
export default NodeBox;
