import type { CheckboxRef, UnrealCheckboxProps } from './Checkbox';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import Group from './Group';
type CompoundedComponent = ForwardRefExoticComponent<UnrealCheckboxProps & RefAttributes<CheckboxRef>> & {
    Group: typeof Group;
};
declare const Checkbox: CompoundedComponent;
type CheckboxProps = UnrealCheckboxProps;
export type { CheckboxProps, CheckboxRef };
export default Checkbox;
