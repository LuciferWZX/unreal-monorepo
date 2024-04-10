import type { CheckboxRef, CheckboxProps } from './Checkbox';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import Group from './Group';
type CompoundedComponent = ForwardRefExoticComponent<CheckboxProps & RefAttributes<CheckboxRef>> & {
    Group: typeof Group;
};
declare const Checkbox: CompoundedComponent;
export type { CheckboxProps, CheckboxRef };
export default Checkbox;
