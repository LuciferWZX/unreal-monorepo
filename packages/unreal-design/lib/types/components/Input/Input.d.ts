/// <reference types="react" />
import { InputProps as RcInputProps, InputRef } from 'rc-input';
export interface InputProps extends RcInputProps {
}
export type { InputRef };
declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<InputRef>>;
export default Input;
