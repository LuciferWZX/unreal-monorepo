import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const CommandList = forwardRef<
  ElementRef<typeof CommandPrimitive.List>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('jb-max-h-[300px] jb-overflow-y-auto jb-overflow-x-hidden', className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;
export default CommandList;
