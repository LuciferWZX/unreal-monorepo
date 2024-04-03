import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
// import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';

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
      'jb-flex jb-cursor-default jb-select-none jb-items-center jb-rounded-sm jb-px-2 jb-py-1.5 jb-text-sm jb-outline-none focus:jb-bg-accent data-[state=open]:jb-bg-accent',
      inset && 'jb-pl-8',
      className
    )}
    {...props}
  >
    {children}
    {/*<ChevronRightIcon className="jb-ml-auto jb-h-4 jb-w-4" />*/}
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
      'jb-z-50 jb-min-w-[8rem] jb-overflow-hidden jb-rounded-md jb-border jb-bg-popover jb-p-1 jb-text-popover-foreground jb-shadow-lg data-[state=open]:jb-animate-in data-[state=closed]:jb-animate-out data-[state=closed]:jb-fade-out-0 data-[state=open]:jb-fade-in-0 data-[state=closed]:jb-zoom-out-95 data-[state=open]:jb-zoom-in-95 data-[side=bottom]:jb-slide-in-from-top-2 data-[side=left]:jb-slide-in-from-right-2 data-[side=right]:jb-slide-in-from-left-2 data-[side=top]:jb-slide-in-from-bottom-2',
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
        'jb-z-50 jb-min-w-[8rem] jb-overflow-hidden jb-rounded-md jb-border jb-bg-popover jb-p-1 jb-text-popover-foreground jb-shadow-md',
        'data-[state=open]:jb-animate-in data-[state=closed]:jb-animate-out data-[state=closed]:jb-fade-out-0 data-[state=open]:jb-fade-in-0 data-[state=closed]:jb-zoom-out-95 data-[state=open]:jb-zoom-in-95 data-[side=bottom]:jb-slide-in-from-top-2 data-[side=left]:jb-slide-in-from-right-2 data-[side=right]:jb-slide-in-from-left-2 data-[side=top]:jb-slide-in-from-bottom-2',
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
      'jb-relative jb-flex jb-cursor-default jb-select-none jb-items-center jb-rounded-sm jb-px-2 jb-py-1.5 jb-text-sm jb-outline-none jb-transition-colors focus:jb-bg-accent focus:jb-text-accent-foreground data-[disabled]:jb-pointer-events-none data-[disabled]:jb-opacity-50',
      inset && 'jb-pl-8',
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
      'jb-relative jb-flex jb-cursor-default jb-select-none jb-items-center jb-rounded-sm jb-py-1.5 jb-pl-8 jb-pr-2 jb-text-sm jb-outline-none jb-transition-colors focus:jb-bg-accent focus:jb-text-accent-foreground data-[disabled]:jb-pointer-events-none data-[disabled]:jb-opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="jb-absolute jb-left-2 jb-flex jb-h-3.5 jb-w-3.5 jb-items-center jb-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        {/*<CheckIcon className="jb-h-4 jb-w-4" />*/}
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
      'jb-relative jb-flex jb-cursor-default jb-select-none jb-items-center jb-rounded-sm jb-py-1.5 jb-pl-8 jb-pr-2 jb-text-sm jb-outline-none jb-transition-colors focus:jb-bg-accent focus:jb-text-accent-foreground data-[disabled]:jb-pointer-events-none data-[disabled]:jb-opacity-50',
      className
    )}
    {...props}
  >
    <span className="jb-absolute jb-left-2 jb-flex jb-h-3.5 jb-w-3.5 jb-items-center jb-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        {/*<DotFilledIcon className="jb-h-4 jb-w-4 jb-fill-current" />*/}
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
    className={cn('jb-px-2 jb-py-1.5 jb-text-sm jb-font-semibold', inset && 'jb-pl-8', className)}
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
    className={cn('jb--mx-1 jb-my-1 jb-h-px jb-bg-muted', className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('jb-ml-auto jb-text-xs jb-tracking-widest jb-opacity-60', className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
