import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '@/utils';
import { DotFilledIcon } from '@radix-ui/react-icons';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'unreal-relative unreal-flex unreal-cursor-default unreal-select-none unreal-items-center unreal-rounded-sm unreal-py-1.5 unreal-pl-8 unreal-pr-2 unreal-text-sm unreal-outline-none unreal-transition-colors focus:unreal-bg-accent focus:unreal-text-accent-foreground data-[disabled]:unreal-pointer-events-none data-[disabled]:unreal-opacity-50',
      className
    )}
    {...props}
  >
    <span className="unreal-absolute unreal-left-2 unreal-flex unreal-h-3.5 unreal-w-3.5 unreal-items-center unreal-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <DotFilledIcon className="unreal-h-4 unreal-w-4 unreal-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
export default DropdownMenuRadioItem;
