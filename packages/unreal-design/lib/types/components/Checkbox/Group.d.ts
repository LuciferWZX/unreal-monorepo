import { CSSProperties, FormEventHandler, ReactNode } from 'react';
export type CheckboxValueType = string | number | boolean;
export interface CheckboxOptionType<T extends CheckboxValueType = CheckboxValueType> {
    label: ReactNode;
    value: T;
    style?: CSSProperties;
    disabled?: boolean;
    title?: string;
    id?: string;
    onChange?: FormEventHandler<HTMLButtonElement>;
}
export interface CheckboxGroupProps<T extends CheckboxValueType = CheckboxValueType> {
    name?: string;
    defaultValue?: T[];
    value?: T[];
    onChange?: (checkedValues: T[]) => void;
    children?: ReactNode;
    options?: (CheckboxOptionType<T> | string | number)[];
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const CheckboxGroup: import("react").ForwardRefExoticComponent<CheckboxGroupProps<CheckboxValueType> & import("react").RefAttributes<HTMLDivElement>>;
export default CheckboxGroup;
