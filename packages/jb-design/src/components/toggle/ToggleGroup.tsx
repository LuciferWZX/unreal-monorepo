import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, createContext, ElementRef, forwardRef } from 'react';
export const ToggleGroupContext = createContext({});

const ToggleGroup = forwardRef<
  ElementRef<typeof ToggleGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn('jb-flex jb-flex-col jb-items-center jb-justify-center jb-gap-1', className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{}}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
export default ToggleGroup;
