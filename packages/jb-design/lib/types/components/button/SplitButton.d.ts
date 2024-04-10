import { MouseEventHandler, ReactElement } from 'react';
import { ButtonProps } from './Button';
export interface SplitButtonProps extends Omit<ButtonProps, 'type'> {
    type?: 'primary' | 'secondary';
    onIconClick?: MouseEventHandler<HTMLSpanElement>;
    suffix?: ReactElement;
}
declare const _default: (props: SplitButtonProps) => ReactElement;
export default _default;
