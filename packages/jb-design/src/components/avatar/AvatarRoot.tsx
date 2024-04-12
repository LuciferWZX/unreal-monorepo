import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import './index.css';
const AvatarRoot = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root ref={ref} className={cn('jb-avatar', className)} {...props} />
));
AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

export default AvatarRoot;
