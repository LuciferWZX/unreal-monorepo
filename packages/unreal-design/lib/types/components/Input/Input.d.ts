/// <reference types="react" />
import { InputProps as RcInputProps, InputRef } from 'rc-input';
export interface InputProps extends Omit<RcInputProps, 'onChange'> {
    onChange?: (value: string) => void;
}
export type { InputRef };
declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<InputRef>>;
export default Input;
