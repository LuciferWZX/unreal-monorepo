import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
declare const ContextMenuItem: React.ForwardRefExoticComponent<Omit<ContextMenuPrimitive.ContextMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export default ContextMenuItem;
