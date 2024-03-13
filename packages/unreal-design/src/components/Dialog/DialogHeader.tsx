import { cn } from '@/utils';
import { HTMLAttributes } from 'react';

const DialogHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'unreal-flex unreal-flex-col unreal-space-y-1.5 unreal-text-center sm:unreal-text-left',
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';
export default DialogHeader;
