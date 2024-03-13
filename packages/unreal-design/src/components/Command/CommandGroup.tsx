import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const CommandGroup = forwardRef<
  ElementRef<typeof CommandPrimitive.Group>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'unreal-overflow-hidden unreal-p-1 unreal-text-foreground [&_[cmdk-group-heading]]:unreal-px-2 [&_[cmdk-group-heading]]:unreal-py-1.5 [&_[cmdk-group-heading]]:unreal-text-xs [&_[cmdk-group-heading]]:unreal-font-medium [&_[cmdk-group-heading]]:unreal-text-muted-foreground',
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;
export default CommandGroup;
