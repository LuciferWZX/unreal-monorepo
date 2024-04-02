import * as React from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import './index.css';
import { cn } from '@/utils';

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn('jb-context-menu-separator-item', className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
export default ContextMenuSeparator;
