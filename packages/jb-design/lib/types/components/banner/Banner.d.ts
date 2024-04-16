import { CSSProperties, HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { LinkProps } from '../link/Link';
import { ToggleProps } from '../toggle/toggle';
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
declare const DefaultBanner: import("react").ForwardRefExoticComponent<DefaultBannerProps & import("react").RefAttributes<HTMLDivElement>>;
export default DefaultBanner;
