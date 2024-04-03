import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/utils';
const Command = forwardRef<
  ElementRef<typeof CommandPrimitive>,
  ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'jb-flex jb-h-full jb-w-full jb-flex-col jb-overflow-hidden jb-rounded-md jb-bg-popover jb-text-popover-foreground',
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;
export default Command;
