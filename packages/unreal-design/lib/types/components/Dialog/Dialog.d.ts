/// <reference types="react" />
import * as DialogPrimitive from '@radix-ui/react-dialog';
declare const Dialog: import("react").FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: import("react").ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: import("react").FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: import("react").ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
export { Dialog, DialogTrigger, DialogPortal, DialogClose };
