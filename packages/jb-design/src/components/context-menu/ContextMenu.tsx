import { CSSProperties, FC, MouseEventHandler, ReactNode } from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import ContextMenuContent from './ContextMenuContent';
import ContextMenuItem from './ContextMenuItem';
import ContextMenuSeparator from './ContextMenuSeparator';
import ContextMenuShortcut from './ContextMenuShortcut';
import ContextMenuSubTrigger from './ContextMenuSubTrigger';
import ContextMenuSubContent from './ContextMenuSubContent';
import './index.css';
import { ChevronRight } from '@/icons';
import { cn } from '@/utils';
import { isNullOrUndefined } from '@wzx-unreal/react-hooks';
const ContextMenuBox = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

export interface BaseMenuOption {
  key: string;
  label?: string;
  icon?: ReactNode;
  disabled?: boolean;
  classes?: {
    root?: string;
    content?: string;
    icon?: string;
    shortcut?: string;
    label?: string;
  };
  keepIcon?: boolean;
  styles?: {
    root?: CSSProperties;
    content?: CSSProperties;
    icon?: CSSProperties;
    shortcut?: CSSProperties;
    label?: CSSProperties;
  };
  onClick?: MouseEventHandler<HTMLDivElement>;
}
export interface OptionItem extends BaseMenuOption {
  type?: 'item';
  shortcut?: ReactNode;
}
export interface OptionSubmenu extends BaseMenuOption {
  type: 'submenu';
  children?: ContextMenuOptions[];
  rightIcon?: ReactNode;
  rightIconClasses?: string;
  rightIconStyles?: CSSProperties;
}
export interface OptionSeparator extends Omit<BaseMenuOption, 'classes'> {
  type: 'separator';
  className?: string;
}

export type ContextMenuOptions = OptionItem | OptionSubmenu | OptionSeparator;
export interface ContextMenuProps {
  children?: ReactNode;
  options?: ContextMenuOptions[];
}
const ContextMenu: FC<ContextMenuProps> = (props) => {
  const { children, options } = props;

  const renderOptions = (options: ContextMenuOptions[]) => {
    return options?.map((option) => {
      if (option.type === 'separator') {
        return <ContextMenuSeparator className={option.className} key={option.key} />;
      }
      const { classes, styles } = option;
      let shortcut: ReactNode | null = null;
      if (option.type === 'submenu') {
        if (isNullOrUndefined(option.rightIcon)) {
          shortcut = (
            <span
              style={option.rightIconStyles}
              className={cn('jb-chevron-right', option.rightIconClasses)}
            >
              <ChevronRight />
            </span>
          );
        } else {
          shortcut = (
            <span
              style={option.rightIconStyles}
              className={cn('jb-chevron-right', option.rightIconClasses)}
            >
              {option.rightIcon}
            </span>
          );
        }
      } else {
        shortcut = option.shortcut ? (
          <ContextMenuShortcut
            className={cn('jb-ml-[19px]', classes?.shortcut)}
            style={styles?.shortcut}
          >
            {option.shortcut}
          </ContextMenuShortcut>
        ) : null;
      }
      const content = (
        <div
          className={cn('jb-context-menu-item-content', classes?.content)}
          style={styles?.content}
        >
          {option.keepIcon || !isNullOrUndefined(option.icon) ? (
            <span
              className={cn('jb-context-menu-item-leading', classes?.icon)}
              style={styles?.icon}
            >
              {option.icon}
            </span>
          ) : null}
          <span className={cn('jb-context-menu-item-label', classes?.label)} style={styles?.label}>
            {option.label}
          </span>
          {shortcut}
        </div>
      );
      if (option.type === 'submenu') {
        return (
          <ContextMenuSub key={option.key}>
            <ContextMenuSubTrigger
              disabled={option.disabled}
              className={cn('jb-group', classes?.root)}
              onClick={option.onClick}
            >
              {content}
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>{renderOptions(option?.children ?? [])}</ContextMenuSubContent>
          </ContextMenuSub>
        );
      }
      return (
        <ContextMenuItem
          disabled={option.disabled}
          className={cn('jb-group', classes?.root)}
          key={option.key}
          onClick={option.onClick}
        >
          {content}
        </ContextMenuItem>
      );
    });
  };
  return (
    <ContextMenuBox>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuContent>{renderOptions(options ?? [])}</ContextMenuContent>
      </ContextMenuPortal>
    </ContextMenuBox>
  );
};
export default ContextMenu;
