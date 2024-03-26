import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils';
import './index.css';
interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'primary' | 'secondary';
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, type = 'secondary', ...restProps } = props;
  const classNames = cn(
    'jb-button',
    {
      [`jb-button-${type}`]: !!type,
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
