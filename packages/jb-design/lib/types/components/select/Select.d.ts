import { ButtonHTMLAttributes, CSSProperties, FC, MouseEvent, ReactNode } from 'react';
export interface BaseOptionItem {
    className?: string;
    style?: CSSProperties;
    onClick?: (value: string | number, e: MouseEvent) => void;
    disabled?: boolean;
}
export interface NormalOptionItem extends BaseOptionItem {
    type?: 'item';
    value: string | number;
    label: ReactNode;
    icon?: boolean;
}
export interface DividerOptionItem extends Omit<BaseOptionItem, 'onClick' | 'disabled'> {
    type: 'separator';
}
export interface SubOptionItem extends BaseOptionItem {
    type: 'sub';
    label: ReactNode;
    value: string | number;
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
    label: ReactNode;
    value: string | number;
    options: OptionItem[];
    classes?: {
        label?: string;
    };
    styles?: {
        label?: CSSProperties;
    };
}
export type OptionItem = NormalOptionItem | DividerOptionItem | SubOptionItem | GroupOptionItem;
export type SelectValueType = (string | number)[] | string | number | boolean | undefined;
export interface SelectProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value' | 'defaultValue'> {
    placeholder?: string;
    customTriggerNode?: ReactNode;
    align?: 'center' | 'start' | 'end';
    options?: OptionItem[];
    open?: boolean;
    popupMatchSelectWidth?: boolean;
    value?: SelectValueType;
    defaultValue?: SelectValueType;
    mode?: 'single' | 'multiple';
    onChange?: (value: SelectValueType) => void;
    customSelected?: (item: OptionItem) => ReactNode;
}
declare const Select: FC<SelectProps>;
export default Select;
