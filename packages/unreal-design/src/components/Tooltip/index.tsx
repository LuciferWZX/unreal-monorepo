import {
  UnrealTooltip,
  UnrealTooltipContent,
  UnrealTooltipProvider,
  UnrealTooltipTrigger,
  UnrealTooltipContentProps,
} from './Tooltip';
import { ComponentPropsWithoutRef, FC, ReactNode, useContext } from 'react';
import './index.less';
import { ClassNames } from '@wzx-unreal/react-hooks';
import TooltipContext from '@/components/Tooltip/TooltipContext';
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
const Tooltip: FC<TooltipProps> = (props) => {
  const {
    children,
    tooltipContent,
    open,
    onOpenChange,
    delayDuration,
    className,
    matchTriggerWidth,
    matchAvailableHeight,
    trigger,
    ...restProps
  } = props;
  const context = useContext(TooltipContext);
  const mergedDelayDuration = delayDuration ?? context?.delayDuration ?? 400;
  return (
    <UnrealTooltipProvider
      delayDuration={context?.delayDuration}
      skipDelayDuration={context?.skipDelayDuration}
      disableHoverableContent={context?.disableHoverableContent}
    >
      <UnrealTooltip
        delayDuration={delayDuration && mergedDelayDuration}
        open={open}
        onOpenChange={onOpenChange}
      >
        <UnrealTooltipTrigger {...trigger} asChild={trigger?.asChild ?? true}>
          {children}
        </UnrealTooltipTrigger>
        <UnrealTooltipContent
          className={ClassNames(
            {
              'tooltip-match-width': matchTriggerWidth,
              'tooltip-match-content-available-height': matchAvailableHeight,
            },
            className
          )}
          {...restProps}
        >
          {tooltipContent}
        </UnrealTooltipContent>
      </UnrealTooltip>
    </UnrealTooltipProvider>
  );
};
export default Tooltip;
