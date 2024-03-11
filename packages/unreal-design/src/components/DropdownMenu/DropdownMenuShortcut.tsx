import { cn } from '@/utils';
import { HTMLAttributes } from 'react';

const DropdownMenuShortcut = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'unreal-ml-auto unreal-text-xs unreal-tracking-widest unreal-opacity-60',
        className
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
export default DropdownMenuShortcut;
