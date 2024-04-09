import { forwardRef, HTMLAttributes } from 'react';
import './index.css';
import { cn } from '@/utils';
interface TreeSubContainerProps extends HTMLAttributes<HTMLDivElement> {}
const SubTreeContainer = forwardRef<HTMLDivElement, TreeSubContainerProps>((props, ref) => {
  const { className, ...restProps } = props;
  const classes = cn('jb-sub-tree-container', className);
  return <div className={classes} ref={ref} {...restProps} />;
});
export default SubTreeContainer;
