import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useContext } from 'react';
import { ToggleGroupContext } from './ToggleGroup';

const ToggleGroupItem = forwardRef<
  ElementRef<typeof ToggleGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const context = useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item ref={ref} className={cn('', className)} {...props}>
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
export default ToggleGroupItem;
