import { FC, MouseEventHandler, ReactNode } from 'react';
import './index.less';
import { ClassNames } from '@wzx-unreal/react-hooks';
interface PopMenuItemProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isSelected?: boolean;
  disabled?: boolean;
  id?: string;
  mentionId?: string;
}
const PopMenuItem: FC<PopMenuItemProps> = (props) => {
  const { children, onClick, id, disabled, isSelected, mentionId } = props;
  const classNames = ClassNames('unreal-comment-pop-menu-item', {
    'unreal-comment-pop-menu-item-selected': isSelected,
    'unreal-comment-pop-menu-item-disabled': disabled,
  });
  return (
    <div data-mention-index={mentionId} className={classNames} onClick={onClick}>
      {children}
    </div>
  );
};
export default PopMenuItem;
