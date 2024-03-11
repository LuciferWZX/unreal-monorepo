/// <reference types="react" />
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
declare const Menu: {
    DropdownMenu: import("react").FC<DropdownMenuPrimitive.DropdownMenuProps>;
    DropdownMenuTrigger: import("react").ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
    DropdownMenuContent: import("react").ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    DropdownMenuItem: import("react").ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & {
        inset?: boolean | undefined;
    } & import("react").RefAttributes<HTMLDivElement>>;
    DropdownMenuCheckboxItem: import("react").ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    DropdownMenuRadioItem: import("react").ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    DropdownMenuLabel: import("react").ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & {
        inset?: boolean | undefined;
    } & import("react").RefAttributes<HTMLDivElement>>;
    DropdownMenuSeparator: import("react").ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    DropdownMenuShortcut: {
        ({ className, ...props }: import("react").HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    DropdownMenuGroup: import("react").ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & import("react").RefAttributes<HTMLDivElement>>;
    DropdownMenuPortal: import("react").FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
    DropdownMenuSub: import("react").FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
    DropdownMenuSubContent: import("react").ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
    DropdownMenuSubTrigger: import("react").ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & {
        inset?: boolean | undefined;
    } & import("react").RefAttributes<HTMLDivElement>>;
    DropdownMenuRadioGroup: import("react").ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & import("react").RefAttributes<HTMLDivElement>>;
};
export default Menu;
