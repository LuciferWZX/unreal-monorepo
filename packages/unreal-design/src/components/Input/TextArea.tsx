import RcTextarea, { TextAreaProps, TextAreaRef } from 'rc-textarea';

import { cn } from '@/utils';
import { forwardRef } from 'react';

const Textarea = forwardRef<TextAreaRef, TextAreaProps>(({ className, ...props }, ref) => {
  return (
    <RcTextarea
      className={cn(
        'unreal-flex unreal-min-h-[60px] unreal-w-full unreal-rounded-md unreal-border unreal-border-input unreal-bg-transparent unreal-px-3 unreal-py-2 unreal-text-sm unreal-shadow-sm placeholder:unreal-text-muted-foreground focus-visible:unreal-outline-none focus-visible:unreal-ring-1 focus-visible:unreal-ring-ring disabled:unreal-cursor-not-allowed disabled:unreal-opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
