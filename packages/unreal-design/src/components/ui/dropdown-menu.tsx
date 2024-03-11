import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';

import { cn } from '@/utils';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
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

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'unreal-z-50 unreal-min-w-[8rem] unreal-overflow-hidden unreal-rounded-md unreal-border unreal-bg-popover unreal-p-1 unreal-text-popover-foreground unreal-shadow-lg data-[state=open]:unreal-animate-in data-[state=closed]:unreal-animate-out data-[state=closed]:unreal-fade-out-0 data-[state=open]:unreal-fade-in-0 data-[state=closed]:unreal-zoom-out-95 data-[state=open]:unreal-zoom-in-95 data-[side=bottom]:unreal-slide-in-from-top-2 data-[side=left]:unreal-slide-in-from-right-2 data-[side=right]:unreal-slide-in-from-left-2 data-[side=top]:unreal-slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'unreal-z-50 unreal-min-w-[8rem] unreal-overflow-hidden unreal-rounded-md unreal-border unreal-bg-popover unreal-p-1 unreal-text-popover-foreground unreal-shadow-md',
        'data-[state=open]:unreal-animate-in data-[state=closed]:unreal-animate-out data-[state=closed]:unreal-fade-out-0 data-[state=open]:unreal-fade-in-0 data-[state=closed]:unreal-zoom-out-95 data-[state=open]:unreal-zoom-in-95 data-[side=bottom]:unreal-slide-in-from-top-2 data-[side=left]:unreal-slide-in-from-right-2 data-[side=right]:unreal-slide-in-from-left-2 data-[side=top]:unreal-slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
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

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
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

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
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

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'unreal-px-2 unreal-py-1.5 unreal-text-sm unreal-font-semibold',
      inset && 'unreal-pl-8',
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('unreal--mx-1 unreal-my-1 unreal-h-px unreal-bg-muted', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
