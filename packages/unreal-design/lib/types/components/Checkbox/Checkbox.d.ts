import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ComponentPropsWithoutRef, ElementRef } from 'react';
export interface UnrealCheckboxProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    value?: any;
}
export type CheckboxRef = ElementRef<typeof CheckboxPrimitive.Root>;
declare const UnrealCheckbox: import("react").ForwardRefExoticComponent<UnrealCheckboxProps & import("react").RefAttributes<HTMLButtonElement>>;
export default UnrealCheckbox;
