import { Command as CommandPrimitive } from 'cmdk';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { ClassNames } from '@wzx-unreal/react-hooks';
const CommandEmpty = forwardRef<
  ElementRef<typeof CommandPrimitive.Empty>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className={ClassNames('unreal-py-6 unreal-text-center unreal-text-sm', className)}
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
export default CommandEmpty;
