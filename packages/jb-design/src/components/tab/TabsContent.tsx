import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import './index.css';
const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn('jb-tab-content', className)} {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
export default TabsContent;
