import { FC, useCallback } from 'react';
import Dialog from 'rc-dialog';
// import 'rc-dialog/assets/index.css';
import { IDialogPropTypes } from 'rc-dialog/es/IDialogPropTypes';
import { cn } from '@/utils';
import './index.css';
import { Button } from '@/components';
import questionIcon from '../../assets/icons/question.svg';
import { Space } from 'antd';
interface AlertProps extends IDialogPropTypes {
  type?: 'question';
}
const Alert: FC<AlertProps> = (props) => {
  const { children, mask = false, width = 420, type, ...restProps } = props;
  const maskClasses = cn('');
  const wrapperClasses = cn('jb-alert');
  const bodyClasses = cn('jb-alert-body');
  const getIcon = useCallback(() => {
    return <img src={questionIcon} className={cn('jb-alert-question-icon')} alt={'question'} />;
  }, [type]);
  return (
    <Dialog
      mask={mask}
      width={width}
      closable={false}
      classNames={{ mask: maskClasses, wrapper: wrapperClasses, body: bodyClasses }}
      {...restProps}
      footer={
        <Space>
          <Button>取消</Button>
          <Button type="primary">确定</Button>
        </Space>
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
