import { TooltipProps } from 'antd';
import { FC, ReactNode } from 'react';
import { LinkProps } from '../link/Link';
interface JBTooltipProps {
    shortcut?: ReactNode;
    content?: ReactNode;
    link?: LinkProps;
}
declare const JBTooltip: FC<TooltipProps & JBTooltipProps>;
export default JBTooltip;
