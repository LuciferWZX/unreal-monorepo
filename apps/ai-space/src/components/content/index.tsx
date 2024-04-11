import { FC, HTMLAttributes } from 'react';
import { cn } from '@wzx-unreal/jb-design';

interface ContentProps extends HTMLAttributes<HTMLElement> {}
const Content: FC<ContentProps> = (props) => {
  const { className, ...restProps } = props;
  const classes = cn('', className);
  return <section className={classes} {...restProps} />;
};
export default Content;
