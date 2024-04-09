import { CSSProperties, FC, forwardRef, HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { cn } from '@/utils';
import './index.css';
import { LinkProps } from '@/components/link/Link';
import { Link, Select, Toggle } from '@/components';
import { Space } from 'antd';
import infoIcon from '@/assets/icons/info.svg';
import successIcon from '@/assets/icons/success.svg';
import warningIcon from '@/assets/icons/warning.svg';
import errorIcon from '@/assets/icons/error.svg';
import { isBoolean, isUndefined } from '@wzx-unreal/react-hooks';
import { Close } from '@/icons';
import { ToggleProps } from '@/components/toggle/toggle';
export interface DefaultBannerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  withIcon?: boolean | ReactNode;
  closeIcon?: boolean | ReactNode;
  sideBorder?: boolean;
  title?: ReactNode;
  inline?: boolean;
  type?: 'info' | 'success' | 'warning' | 'error';
  actions?: LinkProps[];
  actionConfig?: {
    maxShowAction?: number;
    moreProps?: LinkProps;
  };
  classes?: {
    titleIcon?: string;
    closeIcon?: string;
  };
  styles?: {
    titleIcon?: CSSProperties;
    closeIcon?: CSSProperties;
  };
  defaultCloseButtonProps?: ToggleProps;
  onClose?: MouseEventHandler<HTMLSpanElement>;
}
const DefaultBanner = forwardRef<HTMLDivElement, DefaultBannerProps>((props, ref) => {
  const {
    withIcon,
    type = 'info',
    closeIcon,
    actions,
    sideBorder,
    className,
    title,
    onClose,
    classes,
    styles,
    defaultCloseButtonProps,
    inline,
    actionConfig = {
      maxShowAction: 2,
      moreProps: {
        children: 'more',
      },
    },
    ...restProps
  } = props;
  const mergedActionConfig = {
    maxShowAction: 2,
    ...actionConfig,
    moreProps: {
      children: 'more',
      ...actionConfig?.moreProps,
    },
  };
  const _classes = cn(
    'jb-banner',
    { 'jb-banner-inline': inline, [`jb-banner-${type}`]: !!type },
    className
  );
  const renderActions = (_actions: LinkProps[]) => {
    const showOps = _actions.slice(0, mergedActionConfig.maxShowAction); // 提取前三个元素
    const dropdownOps = _actions.slice(mergedActionConfig.maxShowAction); // 提取剩余的元素
    const hasDropdown = dropdownOps.length > 0;
    return (hasDropdown ? showOps.concat({ ...mergedActionConfig.moreProps }) : _actions)?.map(
      (act, index) => {
        if (hasDropdown && index === showOps.length) {
          return (
            <Select
              key={index}
              popupMatchSelectWidth={false}
              style={{ width: 100 }}
              customTriggerNode={<Link {...act} />}
              options={dropdownOps.map((dropdownOps, index) => {
                return {
                  type: 'item',
                  value: index,
                  icon: false,
                  label: dropdownOps.children,
                  onClick: (_, e) => {
                    dropdownOps.onClick?.(e as any);
                  },
                };
              })}
            />
          );
        }
        return <Link key={index} {...act} />;
      }
    );
  };
  const renderIcon = () => {
    if (withIcon) {
      if (isBoolean(withIcon)) {
        let src = infoIcon;
        switch (type) {
          case 'success': {
            src = successIcon;
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
        return (
          <span className="jb-banner-icon">
            <img alt={type} src={src} />
          </span>
        );
      }
    }
  };
  const renderCloseIcon = () => {
    if (!isUndefined(closeIcon) && !isBoolean(closeIcon)) {
      return closeIcon;
    }
    const mergedToggleProps = defaultCloseButtonProps ?? {};
    return (
      <Toggle {...mergedToggleProps} type={'button'}>
        <Close />
      </Toggle>
    );
  };
  const renderBannerTitleContent = () => {
    if (inline) {
      return (
        <span className={cn('jb-banner-title')}>
          <div className={cn('jb-banner-inline-title')}>{title}</div>
          {actions && (
            <div className={cn('jb-banner-inline-actions')}>
              <Space size={16}>{renderActions(actions)}</Space>
            </div>
          )}
        </span>
      );
    }
    return (
      <>
        <span className={cn('jb-banner-title')}>{title}</span>
        {actions && <Space size={16}>{renderActions(actions)}</Space>}
      </>
    );
  };
  return (
    <div ref={ref} className={_classes} {...restProps}>
      <div className={cn('jb-banner-content')}>
        {!isUndefined(withIcon) && (
          <span style={styles?.titleIcon} className={cn('jb-banner-icon', classes?.titleIcon)}>
            {renderIcon()}
          </span>
        )}
        {renderBannerTitleContent()}
      </div>
      {closeIcon === false ? null : (
        <span
          style={styles?.closeIcon}
          onClick={onClose}
          className={cn('jb-banner-close', classes?.closeIcon)}
        >
          {renderCloseIcon()}
        </span>
      )}
    </div>
  );
});
DefaultBanner.displayName = 'DefaultBanner';
export default DefaultBanner;
