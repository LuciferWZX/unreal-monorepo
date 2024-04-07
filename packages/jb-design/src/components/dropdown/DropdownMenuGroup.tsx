import { ComponentPropsWithoutRef, FC } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

const DropdownMenuGroup: FC<ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>> = (
  props
) => {
  const { className, ...restProps } = props;
  return <DropdownMenuPrimitive.Group {...restProps} />;
};
export default DropdownMenuGroup;
