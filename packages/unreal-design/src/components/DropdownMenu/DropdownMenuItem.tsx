import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'unreal-relative unreal-flex unreal-cursor-default unreal-select-none unreal-items-center unreal-rounded-sm unreal-px-2 unreal-py-1.5 unreal-text-sm unreal-outline-none unreal-transition-colors focus:unreal-bg-accent focus:unreal-text-accent-foreground data-[disabled]:unreal-pointer-events-none data-[disabled]:unreal-opacity-50',
      inset && 'unreal-pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
export default DropdownMenuItem;
