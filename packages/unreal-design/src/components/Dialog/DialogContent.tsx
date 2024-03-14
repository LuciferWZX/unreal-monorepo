import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/utils';
import { Cross2Icon } from '@radix-ui/react-icons';

import React, {
  cloneElement,
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementRef,
  forwardRef,
  ReactElement,
  ReactNode,
} from 'react';
import { DialogPortal } from './Dialog';
import DialogOverlay from './DialogOverlay';
import { ClassNames, isNull } from '@wzx-unreal/react-hooks';
export interface DialogContentProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  onClose?: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => void;
  closeIcon?: ReactNode;
  container?: HTMLElement | null;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
}
const DialogContent = forwardRef<ElementRef<typeof DialogPrimitive.Content>, DialogContentProps>(
  (
    {
      className,
      overlayStyle,
      overlayClassName,
      children,
      onClose,
      container,
      closeIcon,
      ...props
    },
    ref
  ) => {
    let closeIconWithClassName = closeIcon;
    if (closeIconWithClassName) {
      closeIconWithClassName = cloneElement(closeIcon as ReactElement, {
        className: ClassNames(
          `unreal-h-4 unreal-w-4`,
          (closeIcon as ReactElement).props?.className
        ),
        style: {
          display: 'block',
          ...(closeIcon as ReactElement).props?.style,
        },
      });
    }
    return (
      <DialogPortal container={container}>
        <DialogOverlay style={overlayStyle} className={overlayClassName} onClick={onClose} />
        <DialogPrimitive.Content
          ref={ref}
          className={ClassNames(
            // 'unreal-fixed',
            'unreal-absolute',
            'unreal-left-[50%] unreal-top-[50%] unreal-z-50 unreal-grid unreal-w-full unreal-max-w-lg unreal-translate-x-[-50%] unreal-translate-y-[-50%] unreal-gap-4 unreal-border unreal-bg-background unreal-p-6 unreal-shadow-lg unreal-duration-200 data-[state=open]:unreal-animate-in data-[state=closed]:unreal-animate-out data-[state=closed]:unreal-fade-out-0 data-[state=open]:unreal-fade-in-0 data-[state=closed]:unreal-zoom-out-95 data-[state=open]:unreal-zoom-in-95 data-[state=closed]:unreal-slide-out-to-left-1/2 data-[state=closed]:unreal-slide-out-to-top-[48%] data-[state=open]:unreal-slide-in-from-left-1/2 data-[state=open]:unreal-slide-in-from-top-[48%] sm:unreal-rounded-lg',
            className
          )}
          {...props}
        >
          {children}
          <DialogPrimitive.Close
            onClick={onClose}
            className="unreal-absolute unreal-right-4 unreal-top-4 unreal-rounded-sm unreal-opacity-70 unreal-ring-offset-background unreal-transition-opacity hover:unreal-opacity-100 focus:unreal-outline-none focus:unreal-ring-2 focus:unreal-ring-ring focus:unreal-ring-offset-2 disabled:unreal-pointer-events-none data-[state=open]:unreal-bg-accent data-[state=open]:unreal-text-muted-foreground"
          >
            {isNull(closeIconWithClassName)
              ? null
              : closeIconWithClassName ?? (
                  <>
                    <Cross2Icon className="unreal-h-4 unreal-w-4" />
                    <span className="unreal-sr-only">Close</span>
                  </>
                )}
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPortal>
    );
  }
);
DialogContent.displayName = DialogPrimitive.Content.displayName;
export default DialogContent;
