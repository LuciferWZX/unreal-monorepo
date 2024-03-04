import { FC, MouseEventHandler, ReactNode } from 'react';
interface PopMenuItemProps {
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
    isSelected?: boolean;
    disabled?: boolean;
    id?: string;
    mentionId?: string;
}
declare const PopMenuItem: FC<PopMenuItemProps>;
export default PopMenuItem;
