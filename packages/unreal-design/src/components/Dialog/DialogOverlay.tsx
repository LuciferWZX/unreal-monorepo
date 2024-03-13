import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      // 'unreal-fixed ',
      'unreal-absolute',
      'unreal-inset-0 unreal-z-50 unreal-bg-black/80 unreal- data-[state=open]:unreal-animate-in data-[state=closed]:unreal-animate-out data-[state=closed]:unreal-fade-out-0 data-[state=open]:unreal-fade-in-0',
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
export default DialogOverlay;
