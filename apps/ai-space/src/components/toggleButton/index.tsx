import { cn, ToggleGroupItem } from '@wzx-unreal/jb-design';
import { FC, ReactNode } from 'react';
import styles from './index.module.css';
interface ToggleButtonProps {
  children?: ReactNode;
  value: string;
  className?: string;
  size?: 'default' | 'sm' | 'lg';
}
const ToggleButton: FC<ToggleButtonProps> = (props) => {
  const { children, value, className, size = 'default' } = props;
  const classes = cn(
    styles.toggle_button,
    {
      [styles[`size-${size}`]]: !!size,
    },
    className
  );
  return (
    <ToggleGroupItem className={classes} value={value}>
      {children}
    </ToggleGroupItem>
  );
};
export default ToggleButton;
