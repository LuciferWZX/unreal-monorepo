import { InputHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    suffix?: ReactNode | SuffixType[];
    block?: boolean;
}
export interface SuffixType {
    type?: 'folder' | 'expand';
    key: string;
    children?: ReactNode;
    disabled?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLSpanElement>;
}
declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
export default Input;
