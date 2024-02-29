import { forwardRef, ReactNode } from 'react';
interface PopMenuProps {
  children?: ReactNode;
}
const PopMenu = forwardRef<HTMLDivElement, PopMenuProps>((props, ref) => {
  const { children } = props;
  return (
    <div
      ref={ref}
      style={{
        top: '-9999px',
        left: '-9999px',
        position: 'absolute',
        zIndex: 1,
        padding: '3px',
        background: 'white',
        borderRadius: '4px',
        boxShadow: '0 1px 5px rgba(0,0,0,.2)',
      }}
      data-cy="mentions-portal"
    >
      {children}
    </div>
  );
});
export default PopMenu;
