import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const UnrealTooltipProvider = TooltipPrimitive.Provider;

const UnrealTooltip = TooltipPrimitive.Root;

const UnrealTooltipTrigger = TooltipPrimitive.Trigger;
const UnrealTooltipPortal = TooltipPrimitive.Portal;
export interface UnrealTooltipContentProps
  extends ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  container?: HTMLElement | null;
}
const UnrealTooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  UnrealTooltipContentProps
>(({ className, container, sideOffset = 4, ...props }, ref) => (
  <UnrealTooltipPortal container={container}>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      hideWhenDetached={true}
      className={cn(
        'unreal-z-50 unreal-overflow-hidden unreal-rounded-md unreal-bg-tooltip unreal-px-3 unreal-py-1.5 unreal-text-xs unreal-text-tooltip-foreground unreal-animate-in unreal-fade-in-0 unreal-zoom-in-95 data-[state=closed]:unreal-animate-out data-[state=closed]:unreal-fade-out-0 data-[state=closed]:unreal-zoom-out-95 data-[side=bottom]:unreal-slide-in-from-top-2 data-[side=left]:unreal-slide-in-from-right-2 data-[side=right]:unreal-slide-in-from-left-2 data-[side=top]:unreal-slide-in-from-bottom-2',
        'unreal-shadow-tp',
        className
      )}
      {...props}
    />
  </UnrealTooltipPortal>
));
UnrealTooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { UnrealTooltip, UnrealTooltipTrigger, UnrealTooltipContent, UnrealTooltipProvider };
