import * as ToastPrimitives from '@radix-ui/react-toast';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const ToastDescription = forwardRef<
  ElementRef<typeof ToastPrimitives.Description>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('unreal-text-sm unreal-opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
export default ToastDescription;
