/// <reference types="react" />
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
export interface TooltipContextType extends Omit<TooltipPrimitive.TooltipProviderProps, 'children'> {
}
declare const TooltipContext: import("react").Context<TooltipContextType | null>;
export default TooltipContext;
