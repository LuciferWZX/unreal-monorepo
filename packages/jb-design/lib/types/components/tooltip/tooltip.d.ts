import { TooltipProps } from 'antd';
import { FC, ReactNode } from 'react';
import { LinkProps } from '../link/Link';
interface JBTooltipProps {
    shortcut?: ReactNode;
    content?: ReactNode;
    footer?: ReactNode;
    link?: LinkProps;
    type?: 'error' | 'warning' | 'more-info' | 'more-info-warning' | 'more-info-error' | 'more-info-success';
    theme?: 'light' | 'dark';
}
declare const JBTooltip: FC<TooltipProps & JBTooltipProps>;
export default JBTooltip;
