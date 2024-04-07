import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { Command as CommandPrimitive } from 'cmdk';
const Command = forwardRef<
  ElementRef<typeof CommandPrimitive>,
  ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive ref={ref} className={className} {...props} />
));
Command.displayName = CommandPrimitive.displayName;
export default Command;
