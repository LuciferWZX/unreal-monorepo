import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, CSSProperties, FC } from 'react';
declare const DropdownMenuSub: FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
interface DropdownMenuContainerProps extends ComponentPropsWithoutRef<typeof DropdownMenuSub> {
    className?: string;
    style?: CSSProperties;
}
declare const DropdownMenuSubContainer: FC<DropdownMenuContainerProps>;
export default DropdownMenuSubContainer;
