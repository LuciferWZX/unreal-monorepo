import InternalInput from './Input';
import type { InputProps, InputRef } from './Input';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import TextArea from './TextArea';

type CompoundedComponent = ForwardRefExoticComponent<InputProps> &
  RefAttributes<InputRef> & {
    TextArea: typeof TextArea;
  };
const Input = InternalInput as CompoundedComponent;
Input.displayName = 'Input';
Input.TextArea = TextArea;

export type { InputProps, InputRef } from './Input';
export default Input;
