import { FC, ReactNode } from 'react';
import { PopoverContentProps } from './Popover';
interface PopoverProps extends PopoverContentProps {
    open?: boolean;
    children?: ReactNode;
    popContent?: ReactNode;
    modal?: boolean;
}
declare const Popover: FC<PopoverProps>;
export default Popover;
