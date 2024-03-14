import { Command as CommandPrimitive } from 'cmdk';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { ClassNames } from '@wzx-unreal/react-hooks';
const CommandLoading = forwardRef<
  ElementRef<typeof CommandPrimitive.Loading>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Loading>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Loading
    ref={ref}
    className={ClassNames('unreal-py-6 unreal-text-center unreal-text-sm', className)}
    {...props}
  />
));

CommandLoading.displayName = CommandPrimitive.Loading.displayName;
export default CommandLoading;
