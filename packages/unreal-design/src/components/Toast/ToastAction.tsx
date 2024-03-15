import * as ToastPrimitives from '@radix-ui/react-toast';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as React from 'react';

const ToastAction = forwardRef<
  ElementRef<typeof ToastPrimitives.Action>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'unreal-inline-flex unreal-h-8 unreal-shrink-0 unreal-items-center unreal-justify-center unreal-rounded-md unreal-border unreal-bg-transparent unreal-px-3 unreal-text-sm unreal-font-medium unreal-transition-colors hover:unreal-bg-secondary focus:unreal-outline-none focus:unreal-ring-1 focus:unreal-ring-ring disabled:unreal-pointer-events-none disabled:unreal-opacity-50 group-[.destructive]:unreal-border-muted/40 group-[.destructive]:hover:unreal-border-destructive/30 group-[.destructive]:hover:unreal-bg-destructive group-[.destructive]:hover:unreal-text-destructive-foreground group-[.destructive]:focus:unreal-ring-destructive unreal-toast-action',
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

export type ToastActionElement = React.ReactElement<typeof ToastAction>;
export default ToastAction;
