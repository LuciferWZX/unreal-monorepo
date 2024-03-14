import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const CommandItem = forwardRef<
  ElementRef<typeof CommandPrimitive.Item>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        ' unreal-relative unreal-flex unreal-cursor-default unreal-select-none unreal-items-center unreal-rounded-sm unreal-px-2 unreal-py-1.5 unreal-text-sm unreal-outline-none aria-selected:unreal-bg-accent aria-selected:unreal-text-accent-foreground  data-[disabled="true"]:unreal-opacity-50 data-[disabled="true"]:unreal-cursor-not-allowed',
        className
      )}
      {...props}
    />
  );
});

CommandItem.displayName = CommandPrimitive.Item.displayName;
export default CommandItem;
