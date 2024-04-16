import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ComponentPropsWithoutRef, ElementRef } from 'react';
export interface CheckboxProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    value?: any;
    skipGroup?: boolean;
    indeterminate?: boolean;
}
export type CheckboxRef = ElementRef<typeof CheckboxPrimitive.Root>;
declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLButtonElement>>;
export default Checkbox;
