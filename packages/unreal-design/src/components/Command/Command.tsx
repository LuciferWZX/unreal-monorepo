import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const Command = forwardRef<
  ElementRef<typeof CommandPrimitive>,
  ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'unreal-flex unreal-h-full unreal-w-full unreal-flex-col unreal-overflow-hidden unreal-rounded-md unreal-bg-popover unreal-text-popover-foreground',
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;
export default Command;
