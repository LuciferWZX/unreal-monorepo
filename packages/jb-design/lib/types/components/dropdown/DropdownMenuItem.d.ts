import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
declare const DropdownMenuItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
    checked?: boolean | undefined;
    icon?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export default DropdownMenuItem;
