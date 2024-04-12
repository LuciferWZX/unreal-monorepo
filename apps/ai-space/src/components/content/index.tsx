import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@wzx-unreal/jb-design';

interface ContentProps extends HTMLAttributes<HTMLElement> {}
const Content = forwardRef<HTMLElement, ContentProps>((props, ref) => {
  const { className, ...restProps } = props;
  const classes = cn('', className);
  return <section ref={ref} className={classes} {...restProps} />;
});
export default Content;
