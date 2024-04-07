import { ButtonHTMLAttributes, CSSProperties, FC } from 'react';
export interface BaseOptionItem {
    className?: string;
    style?: CSSProperties;
    onClick?: (value: string) => void;
    disabled?: boolean;
}
export interface NormalOptionItem extends BaseOptionItem {
    type?: 'item';
    value: string;
    label: string;
}
export interface DividerOptionItem extends Omit<BaseOptionItem, 'onClick' | 'disabled'> {
    type: 'separator';
}
export interface SubOptionItem extends BaseOptionItem {
    type: 'sub';
    label: string;
    value: string;
    options: OptionItem[];
    classes?: {
        content?: string;
        trigger?: string;
    };
    styles?: {
        content?: CSSProperties;
        trigger?: CSSProperties;
    };
}
export interface GroupOptionItem extends BaseOptionItem {
    type: 'group';
    label: string;
    value: string;
    options: OptionItem[];
    classes?: {
        label?: string;
    };
    styles?: {
        label?: CSSProperties;
    };
}
export type OptionItem = NormalOptionItem | DividerOptionItem | SubOptionItem | GroupOptionItem;
export interface SelectProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
    placeholder?: string;
    align?: 'center' | 'start' | 'end';
    options?: OptionItem[];
}
declare const Select: FC<SelectProps>;
export default Select;
