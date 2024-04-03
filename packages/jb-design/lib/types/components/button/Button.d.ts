import { ButtonHTMLAttributes } from 'react';
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    type?: 'primary' | 'secondary' | 'slim';
}
export type ButtonRef = HTMLButtonElement;
declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
