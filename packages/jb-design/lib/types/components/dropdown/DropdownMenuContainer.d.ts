import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, FC } from 'react';
declare const DropdownMenu: FC<DropdownMenuPrimitive.DropdownMenuProps>;
interface DropdownMenuContainerProps extends ComponentPropsWithoutRef<typeof DropdownMenu> {
    className?: string;
}
declare const DropdownMenuContainer: FC<DropdownMenuContainerProps>;
export default DropdownMenuContainer;
