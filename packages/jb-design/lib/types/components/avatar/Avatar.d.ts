import { CSSProperties, FC, KeyboardEventHandler, MouseEventHandler } from 'react';
import { AvatarImageProps } from './AvatarImage';
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
declare const Avatar: FC<AvatarProps>;
export default Avatar;
