import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '@/utils';
import { RoundCheck } from '@/icons';
import './index.css';
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    checked?: boolean;
    icon?: boolean;
  }
>(({ className, inset, icon, checked, children, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn('jb-group', 'jb-dropdown-menu-item', inset && 'jb-pl-8', className)}
    // className={cn(
    //   'jb-relative jb-flex jb-cursor-default jb-select-none jb-items-center jb-rounded-sm jb-px-2 jb-py-1.5 jb-text-sm jb-outline-none jb-transition-colors focus:jb-bg-accent focus:jb-text-accent-foreground data-[disabled]:jb-pointer-events-none data-[disabled]:jb-opacity-50',
    //   inset && 'jb-pl-8',
    //   className
    // )}
    {...props}
  >
    <div className={cn('jb-dropdown-menu-item-content')}>
      {icon === false ? null : (
        <span className={cn('jb-dropdown-menu-item-checked')}>{checked && <RoundCheck />}</span>
      )}
      <div className={cn('jb-dropdown-menu-item-label')}>{children}</div>
    </div>
  </DropdownMenuPrimitive.Item>
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
export default DropdownMenuItem;
