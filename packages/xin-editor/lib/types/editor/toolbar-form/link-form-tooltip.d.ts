import { FC, ReactNode } from 'react';
interface LinkFormTooltipProps {
    children?: ReactNode;
    defaultValue?: LinkFormType;
}
interface LinkFormType {
    title: string;
    link: string;
}
declare const LinkFormTooltip: FC<LinkFormTooltipProps>;
export default LinkFormTooltip;
