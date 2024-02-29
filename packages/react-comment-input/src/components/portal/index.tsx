import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
interface PortalProps {
  children?: ReactNode;
  container?: HTMLElement;
}
const Portal: FC<PortalProps> = (props) => {
  const { children, container } = props;
  return typeof document === 'object' ? createPortal(children, container || document.body) : null;
};
export default Portal;
