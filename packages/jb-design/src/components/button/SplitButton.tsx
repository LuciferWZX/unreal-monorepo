import { forwardRef, MouseEventHandler, ReactElement, RefAttributes, useMemo } from 'react';
import { cn } from '@/utils';
import { ButtonProps } from './Button';
import { ChevronDown } from 'lucide-react';

export interface SplitButtonProps extends Omit<ButtonProps, 'type'> {
  type?: 'primary' | 'secondary';
  onIconClick?: MouseEventHandler<HTMLSpanElement>;
  suffix?: ReactElement;
}
const SplitButton = forwardRef<HTMLButtonElement, SplitButtonProps>((props, ref) => {
  const { children, className, type = 'secondary', suffix, onIconClick, ...restProps } = props;

  const classNames = cn(
    'jb-button',
    'jb-button-split',
    {
      [`jb-button-${type}`]: true,
    },
    'jb-button-disabled',
    className
  );
  const childrenClassNames = cn('jb-button-split-children');
  const actionClassNames = cn('jb-button-split-action', {
    [`jb-button-${type}-split-action`]: true,
  });
  const dividerClassNames = cn({
    'jb-button-split-divider': true,
    [`jb-button-${type}-split-divider`]: true,
  });
  return (
    <button className={classNames} {...restProps}>
      <span className={childrenClassNames}>{children}</span>
      <span className={dividerClassNames} />
      <span className={actionClassNames} onClick={onIconClick}>
        <span className={'jb-button-split-icon'}>
          {suffix || <ChevronDown className={'jb-h-full jb-w-full'} />}
        </span>
      </span>
    </button>
  );
});
SplitButton.displayName = 'SplitButton';
export default SplitButton as (props: SplitButtonProps) => ReactElement;

// export default SplitButton;
