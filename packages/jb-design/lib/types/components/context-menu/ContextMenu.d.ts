import { CSSProperties, FC, MouseEventHandler, ReactNode } from 'react';
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
declare const ContextMenu: FC<ContextMenuProps>;
export default ContextMenu;
