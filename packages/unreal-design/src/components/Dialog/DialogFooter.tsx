import { cn } from '@/utils';
import { HTMLAttributes } from 'react';

const DialogFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'unreal-flex unreal-flex-col-reverse sm:unreal-flex-row sm:unreal-justify-end sm:unreal-space-x-2',
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';
export default DialogFooter;
