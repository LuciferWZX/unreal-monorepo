import { UnrealTooltipContentProps } from './Tooltip';
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
interface TooltipProps extends UnrealTooltipContentProps {
    children: ReactNode;
    tooltipContent?: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    delayDuration?: number;
    matchTriggerWidth?: boolean;
    matchAvailableHeight?: boolean;
    trigger?: ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>;
}
declare const Tooltip: FC<TooltipProps>;
export default Tooltip;
