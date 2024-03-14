import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
const toastVariants = cva(
  'unreal-group unreal-pointer-events-auto unreal-relative unreal-flex unreal-w-full unreal-items-center unreal-justify-between unreal-space-x-2 unreal-overflow-hidden unreal-rounded-md unreal-border unreal-p-4 unreal-pr-6 unreal-shadow-lg unreal-transition-all data-[swipe=cancel]:unreal-translate-x-0 data-[swipe=end]:unreal-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:unreal-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:unreal-transition-none data-[state=open]:unreal-animate-in data-[state=closed]:unreal-animate-out data-[swipe=end]:unreal-animate-out data-[state=closed]:unreal-fade-out-80 data-[state=closed]:unreal-slide-out-to-right-full data-[state=open]:unreal-slide-in-from-top-full data-[state=open]:sm:unreal-slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'unreal-border unreal-bg-background unreal-text-foreground',
        destructive:
          'unreal-destructive unreal-group unreal-border-destructive unreal-bg-destructive unreal-text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
const Toast = forwardRef<
  ElementRef<typeof ToastPrimitives.Root>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
export type ToastProps = ComponentPropsWithoutRef<typeof Toast>;
export default Toast;
