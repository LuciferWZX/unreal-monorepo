import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
const UnrealPopover = PopoverPrimitive.Root;

const UnrealPopoverTrigger = PopoverPrimitive.Trigger;

const UnrealPopoverAnchor = PopoverPrimitive.Anchor;

export interface PopoverContentProps
  extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  container?: HTMLElement;
}
const UnrealPopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>((props, ref) => {
  const { className, align, sideOffset = 4, container, ...restProps } = props;
  return (
    <PopoverPrimitive.Portal container={container}>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'unreal-z-50 unreal-w-72 unreal-rounded-md unreal-border unreal-bg-popover unreal-p-4 unreal-text-popover-foreground unreal-shadow-md unreal-outline-none data-[state=open]:unreal-animate-in data-[state=closed]:unreal-animate-out data-[state=closed]:unreal-fade-out-0 data-[state=open]:unreal-fade-in-0 data-[state=closed]:unreal-zoom-out-95 data-[state=open]:unreal-zoom-in-95 data-[side=bottom]:unreal-slide-in-from-top-2 data-[side=left]:unreal-slide-in-from-right-2 data-[side=right]:unreal-slide-in-from-left-2 data-[side=top]:unreal-slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
});
export { UnrealPopoverContent, UnrealPopover, UnrealPopoverTrigger, UnrealPopoverAnchor };
