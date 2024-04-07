import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, FC } from 'react';
import './index.css';
import { cn } from '@/utils';
const DropdownMenu = DropdownMenuPrimitive.Root;
interface DropdownMenuContainerProps extends ComponentPropsWithoutRef<typeof DropdownMenu> {
  className?: string;
}
const DropdownMenuContainer: FC<DropdownMenuContainerProps> = (props) => {
  const { className, children, ...restProps } = props;
  const classes = cn('jb-dropdown-menu-container', className);
  return (
    <DropdownMenu {...restProps}>
      <div className={classes}>{children}</div>
    </DropdownMenu>
  );
};
export default DropdownMenuContainer;
