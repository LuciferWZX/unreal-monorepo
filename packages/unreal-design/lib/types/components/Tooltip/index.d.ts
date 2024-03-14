import { UnrealTooltipTriggerProps } from './Tooltip';
import { FC, ReactNode } from 'react';
interface TooltipProps extends UnrealTooltipTriggerProps {
    children: ReactNode;
    tooltipContent?: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    delayDuration?: number;
    matchTriggerWidth?: boolean;
    matchAvailableHeight?: boolean;
}
declare const Tooltip: FC<TooltipProps>;
export default Tooltip;
