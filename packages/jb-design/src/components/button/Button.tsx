import { ButtonHTMLAttributes, ElementRef, forwardRef, useMemo } from 'react';
import { cn } from '@/utils';
import './index.css';
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'primary' | 'secondary' | 'slim';
}
export type ButtonRef = HTMLButtonElement;
const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const { children, className, type = 'secondary', ...restProps } = props;
  const mergeType = useMemo(() => {
    if (type === 'slim') {
      return 'secondary';
    }
    return type;
  }, [type]);
  const classNames = cn(
    'jb-button',
    {
      [`jb-button-${mergeType}`]: true,
      'jb-button-slim': type === 'slim',
    },
    'jb-button-disabled',
    className
  );
  return (
    <button ref={ref} className={classNames} {...restProps}>
      {children}
    </button>
  );
});
Button.displayName = 'Button';
export default Button;
