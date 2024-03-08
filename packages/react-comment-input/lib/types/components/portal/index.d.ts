import { FC, ReactNode } from 'react';
interface PortalProps {
    children?: ReactNode;
    container?: HTMLElement;
}
declare const Portal: FC<PortalProps>;
export default Portal;
