import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '@/utils';
import { CheckIcon } from '@radix-ui/react-icons';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'unreal-relative unreal-flex unreal-cursor-default unreal-select-none unreal-items-center unreal-rounded-sm unreal-py-1.5 unreal-pl-8 unreal-pr-2 unreal-text-sm unreal-outline-none unreal-transition-colors focus:unreal-bg-accent focus:unreal-text-accent-foreground data-[disabled]:unreal-pointer-events-none data-[disabled]:unreal-opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="unreal-absolute unreal-left-2 unreal-flex unreal-h-3.5 unreal-w-3.5 unreal-items-center unreal-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="unreal-h-4 unreal-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
export default DropdownMenuCheckboxItem;
