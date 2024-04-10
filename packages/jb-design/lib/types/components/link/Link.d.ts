import { AnchorHTMLAttributes, ReactNode } from 'react';
export interface SuffixProps {
    type: 'arrow-top-right';
    className?: string;
    children?: ReactNode;
}
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    disabled?: boolean;
    suffix?: ReactNode | SuffixProps[];
}
declare const Link: import("react").ForwardRefExoticComponent<LinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
export default Link;
