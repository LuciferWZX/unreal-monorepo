import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { cn } from '@/utils';

const ContextMenuSubContent = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.SubContent>,
  ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn('jb-context-menu-content', className)}
    // className={cn(
    //   'jb-z-50 jb-min-w-[8rem] jb-overflow-hidden jb-rounded-md jb-border jb-bg-popover jb-p-1 jb-text-popover-foreground jb-shadow-lg data-[state=open]:jb-animate-in data-[state=closed]:jb-animate-out data-[state=closed]:jb-fade-out-0 data-[state=open]:jb-fade-in-0 data-[state=closed]:jb-zoom-out-95 data-[state=open]:jb-zoom-in-95 data-[side=bottom]:jb-slide-in-from-top-2 data-[side=left]:jb-slide-in-from-right-2 data-[side=right]:jb-slide-in-from-left-2 data-[side=top]:jb-slide-in-from-bottom-2',
    //   className
    // )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
export default ContextMenuSubContent;
