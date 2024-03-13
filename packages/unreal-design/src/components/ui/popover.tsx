import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '@/utils';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
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
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
