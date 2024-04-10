import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
declare const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
    rightChevron?: boolean | ReactNode;
    rightChevronClassName?: string | undefined;
    checked?: boolean | undefined;
    indeterminate?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export default DropdownMenuSubTrigger;
