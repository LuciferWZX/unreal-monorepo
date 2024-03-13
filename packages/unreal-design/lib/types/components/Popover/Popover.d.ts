import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { ComponentPropsWithoutRef } from 'react';
declare const UnrealPopover: React.FC<PopoverPrimitive.PopoverProps>;
declare const UnrealPopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const UnrealPopoverAnchor: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
export interface PopoverContentProps extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
    container?: HTMLElement;
}
declare const UnrealPopoverContent: React.ForwardRefExoticComponent<PopoverContentProps & React.RefAttributes<HTMLDivElement>>;
export { UnrealPopoverContent, UnrealPopover, UnrealPopoverTrigger, UnrealPopoverAnchor };
