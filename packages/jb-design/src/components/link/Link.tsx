import { AnchorHTMLAttributes, forwardRef, ReactNode } from 'react';
import './index.css';
import { cn } from '@/utils';
import { ArrowTopRightOutline } from '@/icons';

export interface SuffixProps {
  type: 'arrow-top-right';
  className?: string;
  children?: ReactNode;
}
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  disabled?: boolean;
  suffix?: ReactNode | SuffixProps[];
}
const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { children, disabled, className, onClick, ...restProps } = props;
  const classes = cn('jb-link', className);
  const renderSuffix = () => {
    if (props.suffix) {
      if (Array.isArray(props.suffix)) {
        return props.suffix.map((item, index) => {
          let child = item.children;
          if (!child) {
            switch (item.type) {
              case 'arrow-top-right': {
                child = <ArrowTopRightOutline />;
              }
            }
          }
          return (
            <span key={index} className={cn('jb-link-suffix-icon', item.className)}>
              {child}
            </span>
          );
        });
      }
      return props.suffix;
    }
    return null;
  };
  return (
    <a
      onClick={disabled ? undefined : onClick}
      aria-disabled={disabled}
      className={classes}
      ref={ref}
      {...restProps}
    >
      {children}
      {renderSuffix()}
    </a>
  );
});
export default Link;
