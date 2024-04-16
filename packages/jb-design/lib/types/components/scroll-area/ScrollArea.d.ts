import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
    horizontalPosition?: 'top';
    horizontalScrollBarStyle?: React.CSSProperties;
    scrollBarStyle?: React.CSSProperties;
    hideXBar?: boolean;
    hideYBar?: boolean;
}
declare const ScrollArea: React.ForwardRefExoticComponent<ScrollAreaProps & React.RefAttributes<HTMLDivElement>>;
interface ScrollBarProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {
    position?: 'top';
}
declare const ScrollBar: React.ForwardRefExoticComponent<ScrollBarProps & React.RefAttributes<HTMLDivElement>>;
export { ScrollArea, ScrollBar };
