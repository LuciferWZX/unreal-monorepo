import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cn } from '@/utils';
import './index.css';
export interface ToggleProps extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> {
  size?: number | 'sm';
  type?: 'button';
}
const Toggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, ToggleProps>(
  ({ className, type, pressed, ...props }, ref) => {
    const mergedPressed = pressed ?? (type === 'button' ? false : undefined);
    return (
      <TogglePrimitive.Root
        pressed={mergedPressed}
        ref={ref}
        className={cn('jb-toggle', { 'jb-toggle-button': type === 'button' }, className)}
        {...props}
      />
    );
  }
);

Toggle.displayName = TogglePrimitive.Root.displayName;

export default Toggle;
