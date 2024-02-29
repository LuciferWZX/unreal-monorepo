import { FC, MouseEventHandler, ReactNode } from 'react';
import './index.less';
import { ClassNames } from '@unreal/react-hooks';
interface PopMenuItemProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isSelected?: boolean;
}
const PopMenuItem: FC<PopMenuItemProps> = (props) => {
  const { children, onClick, isSelected } = props;
  const classNames = ClassNames('unreal-comment-pop-menu-item', {
    'unreal-comment-pop-menu-item-selected': isSelected,
  });
  return (
    <div className={classNames} onClick={onClick}>
      {children}
    </div>
  );
};
export default PopMenuItem;
