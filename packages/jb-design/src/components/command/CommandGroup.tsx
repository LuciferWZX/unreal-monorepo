import * as React from 'react';
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
      'jb-overflow-hidden jb-p-1 jb-text-foreground [&_[cmdk-group-heading]]:jb-px-2 [&_[cmdk-group-heading]]:jb-py-1.5 [&_[cmdk-group-heading]]:jb-text-xs [&_[cmdk-group-heading]]:jb-font-medium [&_[cmdk-group-heading]]:jb-text-muted-foreground',
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;
export default CommandGroup;
