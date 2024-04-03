import { Space, Tooltip, TooltipProps } from 'antd';
import { FC, ReactNode, useMemo } from 'react';
import './index.css';
import { cn } from '@/utils';
import { isFunction } from '@wzx-unreal/react-hooks';
import { Link } from '@/components';
import { LinkProps } from '../link/Link';
interface JBTooltipProps {
  shortcut?: ReactNode;
  content?: ReactNode;
  link?: LinkProps;
}
const JBTooltip: FC<TooltipProps & JBTooltipProps> = (props) => {
  const {
    children,
    arrow = false,
    shortcut,
    content,
    link,
    title,
    className,
    ...restProps
  } = props;
  const classes = cn('jb-tooltip', { 'jb-tooltip-color': !props.color }, className);
  const getTitle = useMemo(() => {
    const _title = isFunction(title) ? title() : title;
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
  }, [title]);
  return (
    <Tooltip title={getTitle} arrow={arrow} {...restProps} overlayClassName={classes}>
      {children}
    </Tooltip>
  );
};
export default JBTooltip;
