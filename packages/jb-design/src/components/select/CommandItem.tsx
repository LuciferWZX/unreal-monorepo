import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/utils';

const CommandItem = forwardRef<
  ElementRef<typeof CommandPrimitive.Item>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      // 'jb-relative jb-flex jb-cursor-default jb-select-none jb-items-center jb-rounded-sm jb-px-2 jb-py-1.5 jb-text-sm jb-outline-none aria-selected:jb-bg-accent aria-selected:jb-text-accent-foreground data-[disabled]:jb-pointer-events-none data-[disabled]:jb-opacity-50',
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;
export default CommandItem;
