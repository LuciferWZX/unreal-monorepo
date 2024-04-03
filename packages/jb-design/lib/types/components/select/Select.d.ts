import { ButtonHTMLAttributes, FC } from 'react';
export interface SelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder?: string;
}
declare const Select: FC<SelectProps>;
export default Select;
