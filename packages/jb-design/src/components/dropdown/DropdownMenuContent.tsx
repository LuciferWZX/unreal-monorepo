import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const DropdownMenuContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn('jb-dropdown-menu-content', 'jb-w-full', className)}
      // className={cn(
      //   'jb-z-50 jb-min-w-[8rem] jb-overflow-hidden jb-rounded-md jb-border jb-bg-popover jb-p-1 jb-text-popover-foreground jb-shadow-md',
      //   'data-[state=open]:jb-animate-in data-[state=closed]:jb-animate-out data-[state=closed]:jb-fade-out-0 data-[state=open]:jb-fade-in-0 data-[state=closed]:jb-zoom-out-95 data-[state=open]:jb-zoom-in-95 data-[side=bottom]:jb-slide-in-from-top-2 data-[side=left]:jb-slide-in-from-right-2 data-[side=right]:jb-slide-in-from-left-2 data-[side=top]:jb-slide-in-from-bottom-2',
      //   className
      // )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
export default DropdownMenuContent;
