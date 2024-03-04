import { CSSProperties, ReactNode } from 'react';
interface PopMenuProps {
    children?: ReactNode;
    theme?: 'dark' | 'light';
    className?: string;
    style?: CSSProperties;
    isEclipse?: boolean;
}
declare const PopMenu: import("react").ForwardRefExoticComponent<PopMenuProps & import("react").RefAttributes<HTMLDivElement>>;
export default PopMenu;
