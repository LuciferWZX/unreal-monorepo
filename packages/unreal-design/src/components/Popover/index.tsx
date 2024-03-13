import { FC, ReactNode, useRef } from 'react';
import {
  PopoverContentProps,
  UnrealPopover,
  UnrealPopoverContent,
  UnrealPopoverTrigger,
} from '@/components/Popover/Popover';
interface PopoverProps extends PopoverContentProps {
  open?: boolean;
  children?: ReactNode;
  popContent?: ReactNode;
  modal?: boolean;
}
const Popover: FC<PopoverProps> = (props) => {
  const { open, children, popContent, modal = true, ...restProps } = props;
  const triggerRef = useRef<HTMLButtonElement>(null);
  return (
    <UnrealPopover open={open} modal={modal}>
      <UnrealPopoverTrigger ref={triggerRef} asChild={true}>
        {children}
      </UnrealPopoverTrigger>
      <UnrealPopoverContent {...restProps}>{popContent}</UnrealPopoverContent>
    </UnrealPopover>
  );
};
Popover.displayName = 'Popover';
export default Popover;
