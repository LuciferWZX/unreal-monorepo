import { cn } from '@/utils';
import { HTMLAttributes } from 'react';

const CommandShortcut = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'unreal-ml-auto unreal-text-xs unreal-tracking-widest unreal-text-muted-foreground',
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';
export default CommandShortcut;
