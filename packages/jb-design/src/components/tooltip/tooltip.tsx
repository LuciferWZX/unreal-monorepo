import { Space, Tooltip, TooltipProps } from 'antd';
import { FC, ReactNode, useMemo } from 'react';
import './index.css';
import { cn } from '@/utils';
import { isFunction } from '@wzx-unreal/react-hooks';
import { Link } from '@/components';
import { LinkProps } from '../link/Link';
import errorIcon from '@/assets/icons/error.svg';
import warningIcon from '@/assets/icons/warning.svg';
import successIcon from '@/assets/icons/success.svg';
interface JBTooltipProps {
  shortcut?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  link?: LinkProps;
  type?:
    | 'error'
    | 'warning'
    | 'more-info'
    | 'more-info-warning'
    | 'more-info-error'
    | 'more-info-success';
  theme?: 'light' | 'dark';
}
const JBTooltip: FC<TooltipProps & JBTooltipProps> = (props) => {
  const {
    children,
    arrow = false,
    shortcut,
    content,
    footer,
    link,
    title,
    className,
    trigger = ['focus', 'hover'],
    type,
    ...restProps
  } = props;
  const classes = cn(
    'jb-tooltip',
    { 'jb-tooltip-color': !props.color, [`jb-tooltip-has-${type}`]: !!type },
    className
  );
  const mergedArrow = useMemo(() => {
    if (arrow) {
      return arrow;
    }
    if (
      type === 'more-info' ||
      type === 'more-info-warning' ||
      type === 'more-info-error' ||
      type === 'more-info-success'
    ) {
      return true;
    }
  }, [arrow, type]);
  const getTitle = useMemo(() => {
    const _title = isFunction(title) ? title() : title;
    if (type) {
      if (
        type === 'more-info' ||
        type === 'more-info-warning' ||
        type === 'more-info-error' ||
        type === 'more-info-success'
      ) {
        return (
          <div
            className={cn('jb-tooltip-content-box', {
              [`jb-tooltip-${type}`]: !!type,
            })}
          >
            <div className={'jb-tooltip-type-content-body'}>
              {type !== 'more-info' && (
                <div className={'jb-tooltip-type-icon'}>
                  {type === 'more-info-error' && <img src={errorIcon} alt={'error'} />}
                  {type === 'more-info-warning' && <img src={warningIcon} alt={'warning'} />}
                  {type === 'more-info-success' && <img src={successIcon} alt={'warning'} />}
                </div>
              )}
              <Space className={'jb-tooltip-type-right'} direction={'vertical'} size={6}>
                <div className={cn('jb-tooltip-type-title')}>{_title}</div>
                <div className={cn('jb-tooltip-type-content')}>{content}</div>
                <div className={cn('jb-tooltip-type-footer')}>{footer}</div>
              </Space>
            </div>
          </div>
        );
      }
      return (
        <div
          className={cn('jb-tooltip-content-box', {
            [`jb-tooltip-${type}`]: !!type,
          })}
        >
          {_title}
        </div>
      );
    }
    if (content) {
      return (
        <div className={cn('jb-tooltip-content-box')}>
          <Space size={6} direction={'vertical'}>
            <div className={cn('jb-tooltip-title')}>{_title}</div>
            <div className={cn('jb-tooltip-content')}>{content}</div>
            {shortcut && (
              <span className={cn('jb-tooltip-shortcut', 'jb-tooltip-content-shortcut')}>
                {shortcut}
              </span>
            )}
            {link && <Link {...link} className={cn('jb-tooltip-link')} />}
          </Space>
        </div>
      );
    }
    if (shortcut) {
      return (
        <div className={cn('jb-tooltip-content-box')}>
          {_title} <span className={cn('jb-tooltip-shortcut')}>{shortcut}</span>
        </div>
      );
    }
    return _title;
  }, [title, content, shortcut, link]);
  return (
    <Tooltip
      trigger={trigger}
      title={getTitle}
      arrow={mergedArrow}
      {...restProps}
      overlayClassName={classes}
    >
      {children}
    </Tooltip>
  );
};
export default JBTooltip;
