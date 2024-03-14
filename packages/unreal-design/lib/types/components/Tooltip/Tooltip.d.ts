import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ComponentPropsWithoutRef } from 'react';
declare const UnrealTooltipProvider: import("react").FC<TooltipPrimitive.TooltipProviderProps>;
declare const UnrealTooltip: import("react").FC<TooltipPrimitive.TooltipProps>;
declare const UnrealTooltipTrigger: import("react").ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export interface UnrealTooltipTriggerProps extends ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
    container?: HTMLElement | null;
}
declare const UnrealTooltipContent: import("react").ForwardRefExoticComponent<UnrealTooltipTriggerProps & import("react").RefAttributes<HTMLDivElement>>;
export { UnrealTooltip, UnrealTooltipTrigger, UnrealTooltipContent, UnrealTooltipProvider };
