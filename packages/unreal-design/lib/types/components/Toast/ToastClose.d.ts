import * as ToastPrimitives from '@radix-ui/react-toast';
import { ComponentPropsWithoutRef } from 'react';
interface ToastCloseProps extends ComponentPropsWithoutRef<typeof ToastPrimitives.Close> {
    variant?: 'destructive' | 'default' | null | undefined;
}
declare const ToastClose: import("react").ForwardRefExoticComponent<ToastCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
export default ToastClose;
