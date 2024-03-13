import React, { CSSProperties, FC, ReactNode } from 'react';
import { Dialog, DialogTrigger, DialogClose } from './Dialog';
import DialogContent from './DialogContent';
import DialogHeader from './DialogHeader';
import DialogTitle from './DialogTitle';
import DialogFooter from './DialogFooter';
import DialogDescription from './DialogDescription';
import { Button, ButtonProps } from '@/components';
import { ClassNames, useBoolean } from '@wzx-unreal/react-hooks';
import * as DialogPrimitive from '@radix-ui/react-dialog/dist';
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
const UnrealDialog: FC<DialogProps> = (props) => {
  const {
    model = true,
    children,
    title,
    closeIcon,
    description,
    content,
    footer,
    container,
    styles,
    classNames,
  } = props;
  const [_open, { set: setOpen }] = useBoolean(false);
  const mergedOpen = props.open ?? _open;
  const dialogProps: DialogPrimitive.DialogProps = {
    modal: model,
    open: mergedOpen,
    onOpenChange: (op) => {
      if (!('open' in props)) {
        setOpen(op);
      }
    },
  };
  return (
    <Dialog {...dialogProps}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        closeIcon={closeIcon}
        container={container}
        onClose={props.onClose}
        style={styles?.content}
        className={ClassNames(classNames?.content)}
        overlayClassName={ClassNames(classNames?.overlay)}
        overlayStyle={styles?.overlay}
      >
        <DialogHeader style={styles?.header} className={ClassNames(classNames?.header)}>
          <DialogTitle style={styles?.title} className={ClassNames(classNames?.title)}>
            {title}
          </DialogTitle>
          <DialogDescription
            style={styles?.description}
            className={ClassNames(classNames?.description)}
          >
            {description}
          </DialogDescription>
        </DialogHeader>
        {content}
        <DialogFooter style={styles?.footer} className={ClassNames(classNames?.footer)}>
          {footer ?? (
            <>
              <DialogClose asChild onClick={props.onClose}>
                <Button
                  className={ClassNames(classNames?.cancelButton)}
                  style={styles?.cancelButton}
                  type="button"
                  variant="secondary"
                  {...props.cancelButtonProps}
                >
                  Close
                </Button>
              </DialogClose>
              <Button
                style={styles?.okButton}
                className={ClassNames(classNames?.okButton)}
                type="button"
                variant="default"
                {...props.okButtonProps}
                onClick={
                  props.okButtonProps?.onClick ??
                  (async (e) => {
                    await props.onOk?.(e);
                    if (!('open' in props)) {
                      setOpen(false);
                    }
                  })
                }
              >
                Ok
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default UnrealDialog;
