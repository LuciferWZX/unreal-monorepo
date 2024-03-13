import * as DialogPrimitive from '@radix-ui/react-dialog';
import React, { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';
export interface DialogContentProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
    onClose?: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => void;
    closeIcon?: ReactNode;
    container?: HTMLElement | null;
    overlayClassName?: string;
    overlayStyle?: CSSProperties;
}
declare const DialogContent: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>>;
export default DialogContent;
