import InternalCheckbox from './Checkbox';
import type { CheckboxRef, CheckboxProps } from './Checkbox';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import Group from './Group';
type CompoundedComponent = ForwardRefExoticComponent<CheckboxProps & RefAttributes<CheckboxRef>> & {
  Group: typeof Group;
};
const Checkbox = InternalCheckbox as CompoundedComponent;

Checkbox.Group = Group;

Checkbox.displayName = 'Checkbox';
export type { CheckboxProps, CheckboxRef };
export default Checkbox;
