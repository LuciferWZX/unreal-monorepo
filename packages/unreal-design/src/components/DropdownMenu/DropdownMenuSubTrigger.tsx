import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '@/utils';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'unreal-flex unreal-cursor-default unreal-select-none unreal-items-center unreal-rounded-sm unreal-px-2 unreal-py-1.5 unreal-text-sm unreal-outline-none focus:unreal-bg-accent data-[state=open]:unreal-bg-accent',
      inset && 'unreal-pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="unreal-ml-auto unreal-h-4 unreal-w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
export default DropdownMenuSubTrigger;
