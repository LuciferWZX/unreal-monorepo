import {
  UnrealTooltip,
  UnrealTooltipContent,
  UnrealTooltipProvider,
  UnrealTooltipTrigger,
  UnrealTooltipTriggerProps,
} from './Tooltip';
import { FC, ReactNode, useContext } from 'react';
import './index.less';
import { ClassNames } from '@wzx-unreal/react-hooks';
import TooltipContext from '@/components/Tooltip/TooltipContext';
interface TooltipProps extends UnrealTooltipTriggerProps {
  children: ReactNode;
  tooltipContent?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number;
  matchTriggerWidth?: boolean;
  matchAvailableHeight?: boolean;
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
        <UnrealTooltipTrigger asChild>{children}</UnrealTooltipTrigger>
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
