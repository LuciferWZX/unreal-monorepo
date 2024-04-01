import { FC, MouseEventHandler, ReactNode, useCallback, useMemo } from 'react';
import Dialog from 'rc-dialog';
// import 'rc-dialog/assets/index.css';
import { IDialogPropTypes } from 'rc-dialog/es/IDialogPropTypes';
import { cn } from '@/utils';
import './index.css';
import { Button, ButtonProps } from '@/components';
import questionIcon from '../../assets/icons/question.svg';
import warningIcon from '../../assets/icons/warning.svg';
import errorIcon from '../../assets/icons/error.svg';
import { Space } from 'antd';
import { useBoolean } from 'ahooks';
interface AlertProps extends Omit<IDialogPropTypes, 'visible'> {
  type?: 'question' | 'warning' | 'error';
  open?: boolean;
  centered?: boolean;
  onOk?: MouseEventHandler<HTMLButtonElement>;
  onCancelButtonProps?: ButtonProps;
  onOkButtonProps?: ButtonProps;
  cancelText?: string;
  okText?: string;
  prefixIcon?: ReactNode;
}
const Alert: FC<AlertProps> = (props) => {
  const {
    onOkButtonProps,
    onCancelButtonProps,
    cancelText = '取消',
    okText = '确定',
    children,
    mask = false,
    width = 420,
    type,
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
  const mergedHasIcon = useMemo(() => {
    return !(!type && !prefixIcon);
  }, [type, prefixIcon]);
  const maskClasses = cn(classNames?.mask);
  const wrapperClasses = cn('jb-alert', classNames?.wrapper);
  const bodyClasses = cn('jb-alert-body', classNames?.body);
  const contentClasses = cn({ 'jb-alert-content-no-icon': !mergedHasIcon }, classNames?.content);
  const classes = cn({ 'jb-alert-centered': centered }, className);
  const getIcon = useCallback(() => {
    if (!mergedHasIcon) {
      return null;
    }
    if (prefixIcon) {
      return prefixIcon;
    }
    let src = '';
    switch (type) {
      case 'question': {
        src = questionIcon;
        break;
      }
      case 'warning': {
        src = warningIcon;
        break;
      }
      case 'error': {
        src = errorIcon;
        break;
      }
    }

    if (!src) {
      return null;
    }
    return <img src={src} className={cn('jb-alert-question-icon')} alt={type} />;
  }, [type]);
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
          <Space>
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
      <span className={cn('jb-alert-icon')}>
        {getIcon()}
        {/*<QuestionFill className={cn('jb-alert-question-icon')} />*/}
      </span>
      {children}
    </Dialog>
  );
};
Alert.displayName = 'Alert';
export default Alert;
