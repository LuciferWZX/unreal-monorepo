import { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { ButtonProps, ButtonRef } from './Button';
import SplitButton from './SplitButton';
import type { SplitButtonProps } from './SplitButton';
type CompoundedComponent = ForwardRefExoticComponent<ButtonProps & RefAttributes<ButtonRef>> & {
    Split: typeof SplitButton;
};
declare const Button: CompoundedComponent;
export default Button;
export type { ButtonProps, SplitButtonProps };
