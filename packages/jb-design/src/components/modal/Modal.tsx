import { FC, MouseEventHandler, ReactNode, useCallback, useMemo } from 'react';
import Dialog from 'rc-dialog';
import { IDialogPropTypes } from 'rc-dialog/es/IDialogPropTypes';
import { cn } from '@/utils';
import './index.css';
import { Button, ButtonProps } from '@/components';
import { Space } from 'antd';
import { useBoolean } from 'ahooks';
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
const Modal: FC<AlertProps> = (props) => {
  const {
    onOkButtonProps,
    onCancelButtonProps,
    cancelText = '取消',
    okText = '确定',
    children,
    mask = false,
    width = 420,
    centered,
    onOk,
    open,
    prefixIcon,
    classNames,
    className,
    footer,
    ...restProps
  } = props;
  const [visible, { setFalse }] = useBoolean(open);
  const mergedVisible = open ?? visible;

  const maskClasses = cn(classNames?.mask);
  const wrapperClasses = cn(classNames?.wrapper);
  const bodyClasses = cn('jb-modal-body', classNames?.body);
  const contentClasses = cn(classNames?.content);
  const classes = cn({ 'jb-modal-centered': centered }, className);
  const handleCancel: MouseEventHandler<HTMLButtonElement> | undefined = async (e) => {
    setFalse();
    await props.onClose?.(e);
  };
  const handleOk: MouseEventHandler<HTMLButtonElement> | undefined = async (e) => {
    if (!onOk) {
      await props.onClose?.(e);
    }
    onOk?.(e);
  };
  return (
    <Dialog
      mask={mask}
      width={width}
      closable={false}
      className={classes}
      visible={mergedVisible}
      prefixCls={'jb-modal'}
      animation="zoom"
      maskAnimation="fade"
      classNames={{
        mask: maskClasses,
        wrapper: wrapperClasses,
        body: bodyClasses,
        content: contentClasses,
      }}
      {...restProps}
      footer={
        footer === undefined ? (
          <Space size={12} className={cn('jb-modal-footer-btns')}>
            <Button onClick={handleCancel} {...onCancelButtonProps}>
              {onCancelButtonProps?.children ?? cancelText}
            </Button>
            <Button type="primary" onClick={handleOk} {...onOkButtonProps}>
              {onOkButtonProps?.children ?? okText}
            </Button>
          </Space>
        ) : null
      }
    >
      {children}
    </Dialog>
  );
};
Modal.displayName = 'Modal';
export default Modal;
