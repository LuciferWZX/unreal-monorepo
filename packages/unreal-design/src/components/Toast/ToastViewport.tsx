import * as ToastPrimitives from '@radix-ui/react-toast';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const ToastViewport = forwardRef<
  ElementRef<typeof ToastPrimitives.Viewport>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'unreal-fixed unreal-top-0 unreal-z-[100] unreal-flex unreal-max-h-screen unreal-w-full unreal-flex-col-reverse unreal-p-4 sm:unreal-bottom-0 sm:unreal-right-0 sm:unreal-top-auto sm:unreal-flex-col md:unreal-max-w-[420px]',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
export default ToastViewport;
