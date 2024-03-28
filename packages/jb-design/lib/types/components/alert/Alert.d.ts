import { FC } from 'react';
import { IDialogPropTypes } from 'rc-dialog/es/IDialogPropTypes';
interface AlertProps extends IDialogPropTypes {
    type?: 'question';
}
declare const Alert: FC<AlertProps>;
export default Alert;
