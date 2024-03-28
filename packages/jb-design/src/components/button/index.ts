import { ForwardRefExoticComponent, RefAttributes } from 'react';
import InternalButton from './Button';
import type { ButtonProps, ButtonRef } from './Button';
import SplitButton from './SplitButton';
import type { SplitButtonProps } from './SplitButton';
type CompoundedComponent = ForwardRefExoticComponent<ButtonProps & RefAttributes<ButtonRef>> & {
  Split: typeof SplitButton;
};
const Button = InternalButton as CompoundedComponent;
Button.Split = SplitButton;
Button.displayName = 'Button';
export default Button;
export type { ButtonProps, SplitButtonProps };
