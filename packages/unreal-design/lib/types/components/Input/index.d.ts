import type { InputProps, InputRef } from './Input';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import TextArea from './TextArea';
type CompoundedComponent = ForwardRefExoticComponent<InputProps> & RefAttributes<InputRef> & {
    TextArea: typeof TextArea;
};
declare const Input: CompoundedComponent;
export type { InputProps, InputRef } from './Input';
export default Input;
