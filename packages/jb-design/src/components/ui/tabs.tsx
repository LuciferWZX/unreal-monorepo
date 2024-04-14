import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "jb-inline-flex jb-h-9 jb-items-center jb-justify-center jb-rounded-lg jb-bg-muted jb-p-1 jb-text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "jb-inline-flex jb-items-center jb-justify-center jb-whitespace-nowrap jb-rounded-md jb-px-3 jb-py-1 jb-text-sm jb-font-medium jb-ring-offset-background jb-transition-all focus-visible:jb-outline-none focus-visible:jb-ring-2 focus-visible:jb-ring-ring focus-visible:jb-ring-offset-2 disabled:jb-pointer-events-none disabled:jb-opacity-50 data-[state=active]:jb-bg-background data-[state=active]:jb-text-foreground data-[state=active]:jb-shadow",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "jb-mt-2 jb-ring-offset-background focus-visible:jb-outline-none focus-visible:jb-ring-2 focus-visible:jb-ring-ring focus-visible:jb-ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
