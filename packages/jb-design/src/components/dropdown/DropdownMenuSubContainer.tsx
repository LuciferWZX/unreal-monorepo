import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, CSSProperties, FC } from 'react';
import './index.css';
import { cn } from '@/utils';
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
interface DropdownMenuContainerProps extends ComponentPropsWithoutRef<typeof DropdownMenuSub> {
  className?: string;
  style?: CSSProperties;
}
const DropdownMenuSubContainer: FC<DropdownMenuContainerProps> = (props) => {
  const { className, children, style, ...restProps } = props;
  const classes = cn('jb-dropdown-menu-container', 'jb-w-full', className);
  return (
    <DropdownMenuSub {...restProps}>
      <div className={classes} style={style}>
        {children}
      </div>
    </DropdownMenuSub>
  );
};
export default DropdownMenuSubContainer;
