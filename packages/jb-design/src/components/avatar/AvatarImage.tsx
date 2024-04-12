import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

export type AvatarImageProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
const AvatarImage = forwardRef<ElementRef<typeof AvatarPrimitive.Image>, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn('jb-aspect-square jb-h-full jb-w-full', className)}
      {...props}
    />
  )
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
export default AvatarImage;
