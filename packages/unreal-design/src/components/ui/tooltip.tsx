import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "unreal-z-50 unreal-overflow-hidden unreal-rounded-md unreal-bg-primary unreal-px-3 unreal-py-1.5 unreal-text-xs unreal-text-primary-foreground unreal-animate-in unreal-fade-in-0 unreal-zoom-in-95 data-[state=closed]:unreal-animate-out data-[state=closed]:unreal-fade-out-0 data-[state=closed]:unreal-zoom-out-95 data-[side=bottom]:unreal-slide-in-from-top-2 data-[side=left]:unreal-slide-in-from-right-2 data-[side=right]:unreal-slide-in-from-left-2 data-[side=top]:unreal-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
