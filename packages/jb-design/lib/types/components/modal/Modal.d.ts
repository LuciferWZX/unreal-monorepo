import { FC, MouseEventHandler, ReactNode } from 'react';
import { IDialogPropTypes } from 'rc-dialog/es/IDialogPropTypes';
import { ButtonProps } from '..';
interface AlertProps extends Omit<IDialogPropTypes, 'visible'> {
    open?: boolean;
    centered?: boolean;
    onOk?: MouseEventHandler<HTMLButtonElement>;
    onCancelButtonProps?: ButtonProps;
    onOkButtonProps?: ButtonProps;
    cancelText?: string;
    okText?: string;
    prefixIcon?: ReactNode;
}
declare const Modal: FC<AlertProps>;
export default Modal;
