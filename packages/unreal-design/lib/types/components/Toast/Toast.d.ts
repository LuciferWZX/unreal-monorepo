import * as ToastPrimitives from '@radix-ui/react-toast';
import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef } from 'react';
declare const Toast: import("react").ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & import("react").RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & import("react").RefAttributes<HTMLLIElement>>;
export type ToastProps = ComponentPropsWithoutRef<typeof Toast>;
export default Toast;
