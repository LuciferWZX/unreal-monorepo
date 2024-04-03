import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import './index.css';
const ContextMenuSubTrigger = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn('jb-context-menu-item', inset && 'jb-pl-8', className)}
    // className={cn(
    //   'jb-flex jb-cursor-default jb-select-none jb-items-center jb-rounded-sm jb-px-2 jb-py-1.5 jb-text-sm jb-outline-none focus:jb-bg-accent focus:jb-text-accent-foreground data-[state=open]:jb-bg-accent data-[state=open]:jb-text-accent-foreground',
    //   inset && 'jb-pl-8',
    //   className
    // )}
    {...props}
  >
    {children}
    {/*<ChevronRightIcon className="jb-ml-auto jb-h-4 jb-w-4" />*/}
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
export default ContextMenuSubTrigger;
