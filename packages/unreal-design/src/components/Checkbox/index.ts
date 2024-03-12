import InternalCheckbox from './Checkbox';
import type { CheckboxRef, UnrealCheckboxProps } from './Checkbox';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import Group from './Group';
type CompoundedComponent = ForwardRefExoticComponent<
  UnrealCheckboxProps & RefAttributes<CheckboxRef>
> & {
  Group: typeof Group;
};
const Checkbox = InternalCheckbox as CompoundedComponent;

Checkbox.Group = Group;

Checkbox.displayName = 'Checkbox';
type CheckboxProps = UnrealCheckboxProps;
export type { CheckboxProps, CheckboxRef };
export default Checkbox;
