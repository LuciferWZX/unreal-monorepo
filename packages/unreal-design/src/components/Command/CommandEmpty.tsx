import { Command as CommandPrimitive } from 'cmdk';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const CommandEmpty = forwardRef<
  ElementRef<typeof CommandPrimitive.Empty>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="unreal-py-6 unreal-text-center unreal-text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
export default CommandEmpty;
