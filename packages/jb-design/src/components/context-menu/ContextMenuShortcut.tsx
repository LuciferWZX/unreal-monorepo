import * as React from 'react';
import { cn } from '@/utils';
import './index.css';
const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('jb-ml-auto jb-text-xs jb-tracking-widest jb-text-muted-foreground', className)}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = 'ContextMenuShortcut';
export default ContextMenuShortcut;
