import React, { CSSProperties, FC, ReactNode } from 'react';
import { ButtonProps } from '..';
interface DialogProps {
    open?: boolean;
    model?: boolean;
    children?: ReactNode;
    title?: ReactNode;
    description?: string;
    content?: ReactNode;
    container?: HTMLElement | null;
    onClose?: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => void;
    onOk?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    cancelButtonProps?: ButtonProps;
    okButtonProps?: ButtonProps;
    styles?: {
        content?: CSSProperties;
        header?: CSSProperties;
        title?: CSSProperties;
        description?: CSSProperties;
        footer?: CSSProperties;
        cancelButton?: CSSProperties;
        okButton?: CSSProperties;
        overlay?: CSSProperties;
    };
    classNames?: {
        content?: string;
        header?: string;
        title?: string;
        description?: string;
        footer?: string;
        cancelButton?: string;
        okButton?: string;
        overlay?: string;
    };
    footer?: ReactNode;
    closeIcon?: ReactNode;
}
declare const UnrealDialog: FC<DialogProps>;
export default UnrealDialog;
