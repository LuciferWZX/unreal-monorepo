import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'jb-tab-trigger',
      // 'jb-inline-flex jb-items-center jb-justify-center jb-whitespace-nowrap jb-rounded-md jb-px-3 jb-py-1 jb-text-sm jb-font-medium jb-ring-offset-background jb-transition-all focus-visible:jb-outline-none focus-visible:jb-ring-2 focus-visible:jb-ring-ring focus-visible:jb-ring-offset-2 disabled:jb-pointer-events-none disabled:jb-opacity-50 data-[state=active]:jb-bg-background data-[state=active]:jb-text-foreground data-[state=active]:jb-shadow',
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
export default TabsTrigger;
