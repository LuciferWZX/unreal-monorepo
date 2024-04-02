import { FC, ReactNode } from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import ContextMenuContent from './ContextMenuContent';
import ContextMenuItem from './ContextMenuItem';
import ContextMenuSeparator from './ContextMenuSeparator';
import ContextMenuShortcut from './ContextMenuShortcut';
import './index.css';
import { IdeaOutline } from '@/icons';
const ContextMenuBox = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
interface ContextMenuProps {
  children?: ReactNode;
}
const ContextMenu: FC<ContextMenuProps> = (props) => {
  const { children } = props;

  return (
    <ContextMenuBox>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem className={'jb-group'}>
          <div className={'jb-context-menu-item-content'}>
            <span className={'jb-context-menu-item-leading'}>
              <IdeaOutline />
            </span>
            <span className={'jb-context-menu-item-label'}>
              Profile Profile Profile Profile Profile Profile
            </span>
            <ContextMenuShortcut className={'jb-ml-[19px]'}>Ctrl+V</ContextMenuShortcut>
          </div>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className={'jb-group'}>
          <div className={'jb-context-menu-item-content'}>
            <span className={'jb-context-menu-item-leading'}>
              <IdeaOutline />
            </span>
            <span className={'jb-context-menu-item-label'}>
              Profile Profile Profile Profile Profile Profile
            </span>
            <ContextMenuShortcut className={'jb-ml-[19px]'}>Ctrl+V</ContextMenuShortcut>
          </div>
        </ContextMenuItem>
        <ContextMenuItem className={'jb-group'}>
          <div className={'jb-context-menu-item-content'}>
            <span className={'jb-context-menu-item-leading'}></span>
            <span className={'jb-context-menu-item-label'}>submit</span>
            <ContextMenuShortcut className={'jb-ml-[19px]'}>Ctrl+V</ContextMenuShortcut>
          </div>
        </ContextMenuItem>
        <ContextMenuItem className={'jb-group'}>
          <div className={'jb-context-menu-item-content'}>
            <span className={'jb-context-menu-item-leading'}></span>
            <span className={'jb-context-menu-item-label'}>home</span>
            <ContextMenuShortcut className={'jb-ml-[19px]'}>Ctrl+V</ContextMenuShortcut>
          </div>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenuBox>
  );
};
export default ContextMenu;
