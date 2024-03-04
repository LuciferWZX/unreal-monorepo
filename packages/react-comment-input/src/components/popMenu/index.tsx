import { CSSProperties, forwardRef, ReactNode } from 'react';
import { ClassNames } from '@wzx-unreal/react-hooks';
import './index.less';
interface PopMenuProps {
  children?: ReactNode;
  theme?: 'dark' | 'light';
  className?: string;
  style?: CSSProperties;
  isEclipse?: boolean;
}
const PopMenu = forwardRef<HTMLDivElement, PopMenuProps>((props, ref) => {
  const { children, className, style, theme, isEclipse } = props;
  const classNames = ClassNames('unreal-comment-pop-menu', className, {
    'unreal-comment-pop-menu-eclipse': isEclipse,
  });
  const darkColorSchema = {
    '--container-bg-color': '#1f1f1f',
    '--item-bg-hover-color': 'rgba(255, 255, 255, 0.08)',
    '--item-text-color': 'rgba(255, 255, 255, 0.85)',
    '--item-text-selected-color': '#1677ff',
    '--item-selected-bg-color': 'rgba(255, 255, 255, 0.08)',
    '--item-text-disabled-color': 'rgba(255, 255, 255, 0.25)',
  };
  const colorSchema = theme === 'dark' ? darkColorSchema : {};

  return (
    <div
      ref={ref}
      style={{ ...colorSchema, ...style }}
      className={classNames}
      data-cy="mentions-portal"
    >
      {children}
    </div>
  );
});
export default PopMenu;
