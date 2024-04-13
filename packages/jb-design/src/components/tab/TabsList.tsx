import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import './index.css';
const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'jb-tab-list',
      // 'jb-inline-flex jb-h-9 jb-items-center jb-justify-center jb-rounded-lg jb-bg-muted jb-p-1 jb-text-muted-foreground',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;
export default TabsList;
