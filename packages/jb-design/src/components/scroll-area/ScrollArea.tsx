import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import './index.css';
import { cn } from '@/utils';
interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  horizontalPosition?: 'top';
  horizontalScrollBarStyle?: React.CSSProperties;
  scrollBarStyle?: React.CSSProperties;
}
const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(
  (
    { className, scrollBarStyle, horizontalScrollBarStyle, horizontalPosition, children, ...props },
    ref
  ) => (
    <ScrollAreaPrimitive.Root ref={ref} className={cn('jb-scroll-area', className)} {...props}>
      <ScrollAreaPrimitive.Viewport className={cn('jb-scroll-area-viewport', className)}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar style={scrollBarStyle} orientation={'vertical'} />
      <ScrollBar
        style={horizontalScrollBarStyle}
        position={horizontalPosition}
        orientation={'horizontal'}
      />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
interface ScrollBarProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {
  position?: 'top';
}
const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarProps
>(({ className, position, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'jb-scrollbar',
      {
        'jb-scrollbar-vertical': orientation === 'vertical',
        'jb-scrollbar-horizontal': orientation === 'horizontal',
        'jb-scrollbar-horizontal-top': position === 'top',
      },
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className={cn('jb-scroll-area-thumb')} />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
