import * as ToastPrimitives from '@radix-ui/react-toast';
import { Cross2Icon } from '@radix-ui/react-icons';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { ClassNames } from '@wzx-unreal/react-hooks';
interface ToastCloseProps extends ComponentPropsWithoutRef<typeof ToastPrimitives.Close> {
  variant?: 'destructive' | 'default' | null | undefined;
}
const ToastClose = forwardRef<ElementRef<typeof ToastPrimitives.Close>, ToastCloseProps>(
  ({ className, variant, ...props }, ref) => (
    <ToastPrimitives.Close
      ref={ref}
      className={ClassNames(
        'unreal-absolute unreal-right-1 unreal-top-1 unreal-rounded-md unreal-p-1  unreal-opacity-0 unreal-transition-opacity  focus:unreal-opacity-100 focus:unreal-outline-none focus:unreal-ring-1 group-hover:unreal-opacity-100 group-[.destructive]:unreal-text-red-300 group-[.destructive]:hover:unreal-text-red-50 group-[.destructive]:focus:unreal-ring-red-400 group-[.destructive]:focus:unreal-ring-offset-red-600',
        {
          'unreal-text-foreground/50': variant !== 'destructive',
          'hover:unreal-text-foreground': variant !== 'destructive',
        },
        className
      )}
      // className={cn(
      //   `${variant === 'destructive' ? '' : 'unreal-text-foreground/50'}`,
      //   `${variant === 'destructive' ? '' : 'hover:unreal-text-foreground'}`,
      //   className
      // )}
      toast-close=""
      {...props}
    >
      <Cross2Icon className="unreal-h-4 unreal-w-4" />
    </ToastPrimitives.Close>
  )
);
ToastClose.displayName = ToastPrimitives.Close.displayName;
export default ToastClose;
