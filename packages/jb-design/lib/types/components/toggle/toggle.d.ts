import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
export interface ToggleProps extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> {
    size?: number | 'sm';
    type?: 'button';
}
declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLButtonElement>>;
export default Toggle;
