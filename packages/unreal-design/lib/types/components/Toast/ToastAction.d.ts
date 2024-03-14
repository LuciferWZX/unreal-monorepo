import * as ToastPrimitives from '@radix-ui/react-toast';
import * as React from 'react';
declare const ToastAction: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export type ToastActionElement = React.ReactElement<typeof ToastAction>;
export default ToastAction;
