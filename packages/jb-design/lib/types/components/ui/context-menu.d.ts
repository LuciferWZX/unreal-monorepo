import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
declare const ContextMenu: React.FC<ContextMenuPrimitive.ContextMenuProps>;
declare const ContextMenuTrigger: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuTriggerProps & React.RefAttributes<HTMLSpanElement>>;
declare const ContextMenuGroup: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuPortal: React.FC<ContextMenuPrimitive.ContextMenuPortalProps>;
declare const ContextMenuSub: React.FC<ContextMenuPrimitive.ContextMenuSubProps>;
declare const ContextMenuRadioGroup: React.ForwardRefExoticComponent<ContextMenuPrimitive.ContextMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSubTrigger: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSubContent: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuContent: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuItem: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuRadioItem: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuLabel: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSeparator: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup, };
