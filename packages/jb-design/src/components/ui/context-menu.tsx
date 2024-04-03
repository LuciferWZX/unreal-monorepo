import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
// import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';

import { cn } from '@/utils';

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'jb-flex jb-cursor-default jb-select-none jb-items-center jb-rounded-sm jb-px-2 jb-py-1.5 jb-text-sm jb-outline-none focus:jb-bg-accent focus:jb-text-accent-foreground data-[state=open]:jb-bg-accent data-[state=open]:jb-text-accent-foreground',
      inset && 'jb-pl-8',
      className
    )}
    {...props}
  >
    {children}
    {/*<ChevronRightIcon className="jb-ml-auto jb-h-4 jb-w-4" />*/}
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'jb-z-50 jb-min-w-[8rem] jb-overflow-hidden jb-rounded-md jb-border jb-bg-popover jb-p-1 jb-text-popover-foreground jb-shadow-lg data-[state=open]:jb-animate-in data-[state=closed]:jb-animate-out data-[state=closed]:jb-fade-out-0 data-[state=open]:jb-fade-in-0 data-[state=closed]:jb-zoom-out-95 data-[state=open]:jb-zoom-in-95 data-[side=bottom]:jb-slide-in-from-top-2 data-[side=left]:jb-slide-in-from-right-2 data-[side=right]:jb-slide-in-from-left-2 data-[side=top]:jb-slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        'jb-z-50 jb-min-w-[8rem] jb-overflow-hidden jb-rounded-md jb-border jb-bg-popover jb-p-1 jb-text-popover-foreground jb-shadow-md data-[state=open]:jb-animate-in data-[state=closed]:jb-animate-out data-[state=closed]:jb-fade-out-0 data-[state=open]:jb-fade-in-0 data-[state=closed]:jb-zoom-out-95 data-[state=open]:jb-zoom-in-95 data-[side=bottom]:jb-slide-in-from-top-2 data-[side=left]:jb-slide-in-from-right-2 data-[side=right]:jb-slide-in-from-left-2 data-[side=top]:jb-slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      'jb-relative jb-flex jb-cursor-default jb-select-none jb-items-center jb-rounded-sm jb-px-2 jb-py-1.5 jb-text-sm jb-outline-none focus:jb-bg-accent focus:jb-text-accent-foreground data-[disabled]:jb-pointer-events-none data-[disabled]:jb-opacity-50',
      inset && 'jb-pl-8',
      className
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'jb-relative jb-flex jb-cursor-default jb-select-none jb-items-center jb-rounded-sm jb-py-1.5 jb-pl-8 jb-pr-2 jb-text-sm jb-outline-none focus:jb-bg-accent focus:jb-text-accent-foreground data-[disabled]:jb-pointer-events-none data-[disabled]:jb-opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="jb-absolute jb-left-2 jb-flex jb-h-3.5 jb-w-3.5 jb-items-center jb-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        {/*<CheckIcon className="jb-h-4 jb-w-4" />*/}
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'jb-relative jb-flex jb-cursor-default jb-select-none jb-items-center jb-rounded-sm jb-py-1.5 jb-pl-8 jb-pr-2 jb-text-sm jb-outline-none focus:jb-bg-accent focus:jb-text-accent-foreground data-[disabled]:jb-pointer-events-none data-[disabled]:jb-opacity-50',
      className
    )}
    {...props}
  >
    <span className="jb-absolute jb-left-2 jb-flex jb-h-3.5 jb-w-3.5 jb-items-center jb-justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        {/*<DotFilledIcon className="jb-h-4 jb-w-4 jb-fill-current" />*/}
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      'jb-px-2 jb-py-1.5 jb-text-sm jb-font-semibold jb-text-foreground',
      inset && 'jb-pl-8',
      className
    )}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn('jb--mx-1 jb-my-1 jb-h-px jb-bg-border', className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('jb-ml-auto jb-text-xs jb-tracking-widest jb-text-muted-foreground', className)}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = 'ContextMenuShortcut';

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
