import { Command as CommandPrimitive } from 'cmdk';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="unreal-flex unreal-items-center unreal-border-b unreal-px-3"
    cmdk-input-wrapper=""
  >
    <MagnifyingGlassIcon className="unreal-mr-2 unreal-h-4 unreal-w-4 unreal-shrink-0 unreal-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'unreal-flex unreal-h-10 unreal-w-full unreal-rounded-md unreal-bg-transparent unreal-py-3 unreal-text-sm unreal-outline-none placeholder:unreal-text-muted-foreground disabled:unreal-cursor-not-allowed disabled:unreal-opacity-50',
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;
export default CommandInput;
