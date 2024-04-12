import {
  CSSProperties,
  ElementRef,
  FC,
  forwardRef,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react';
import AvatarRoot from './AvatarRoot';
import AvatarImage, { AvatarImageProps } from './AvatarImage';
import AvatarFallback from './AvatarFallback';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

interface AvatarProps extends Omit<AvatarImageProps, 'onClick' | 'onKeyDown'> {
  onClick?: MouseEventHandler<HTMLSpanElement>;
  onKeyDown?: KeyboardEventHandler<HTMLSpanElement>;
  onFallbackClick?: MouseEventHandler<HTMLSpanElement>;
  delayMs?: number;
  classes?: {
    img?: string;
    fallback?: string;
  };
  styles?: {
    img?: CSSProperties;
    fallback?: CSSProperties;
  };
}
type RefType = ElementRef<typeof AvatarPrimitive.Root>;
const Avatar: FC<AvatarProps> = forwardRef<RefType, AvatarProps>((props, ref) => {
  const {
    onClick,
    style,
    className,
    children,
    classes,
    styles,
    onFallbackClick,
    delayMs,
    onKeyDown,
    ...restProps
  } = props;
  return (
    <AvatarRoot
      ref={ref}
      onKeyDown={onKeyDown}
      tabIndex={1}
      onClick={onClick}
      className={className}
      style={style}
    >
      <AvatarImage className={classes?.img} style={styles?.img} {...restProps} />
      <AvatarFallback
        onClick={onFallbackClick}
        delayMs={delayMs}
        className={classes?.fallback}
        style={styles?.fallback}
      >
        {children}
      </AvatarFallback>
    </AvatarRoot>
  );
});
export default Avatar;
