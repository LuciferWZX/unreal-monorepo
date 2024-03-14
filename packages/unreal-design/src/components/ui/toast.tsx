import * as React from "react"
import { Cross2Icon } from "@radix-ui/react-icons"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "unreal-fixed unreal-top-0 unreal-z-[100] unreal-flex unreal-max-h-screen unreal-w-full unreal-flex-col-reverse unreal-p-4 sm:unreal-bottom-0 sm:unreal-right-0 sm:unreal-top-auto sm:unreal-flex-col md:unreal-max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "unreal-group unreal-pointer-events-auto unreal-relative unreal-flex unreal-w-full unreal-items-center unreal-justify-between unreal-space-x-2 unreal-overflow-hidden unreal-rounded-md unreal-border unreal-p-4 unreal-pr-6 unreal-shadow-lg unreal-transition-all data-[swipe=cancel]:unreal-translate-x-0 data-[swipe=end]:unreal-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:unreal-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:unreal-transition-none data-[state=open]:unreal-animate-in data-[state=closed]:unreal-animate-out data-[swipe=end]:unreal-animate-out data-[state=closed]:unreal-fade-out-80 data-[state=closed]:unreal-slide-out-to-right-full data-[state=open]:unreal-slide-in-from-top-full data-[state=open]:sm:unreal-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "unreal-border unreal-bg-background unreal-text-foreground",
        destructive:
          "unreal-destructive unreal-group unreal-border-destructive unreal-bg-destructive unreal-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "unreal-inline-flex unreal-h-8 unreal-shrink-0 unreal-items-center unreal-justify-center unreal-rounded-md unreal-border unreal-bg-transparent unreal-px-3 unreal-text-sm unreal-font-medium unreal-transition-colors hover:unreal-bg-secondary focus:unreal-outline-none focus:unreal-ring-1 focus:unreal-ring-ring disabled:unreal-pointer-events-none disabled:unreal-opacity-50 group-[.destructive]:unreal-border-muted/40 group-[.destructive]:hover:unreal-border-destructive/30 group-[.destructive]:hover:unreal-bg-destructive group-[.destructive]:hover:unreal-text-destructive-foreground group-[.destructive]:focus:unreal-ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "unreal-absolute unreal-right-1 unreal-top-1 unreal-rounded-md unreal-p-1 unreal-text-foreground/50 unreal-opacity-0 unreal-transition-opacity hover:unreal-text-foreground focus:unreal-opacity-100 focus:unreal-outline-none focus:unreal-ring-1 group-hover:unreal-opacity-100 group-[.destructive]:unreal-text-red-300 group-[.destructive]:hover:unreal-text-red-50 group-[.destructive]:focus:unreal-ring-red-400 group-[.destructive]:focus:unreal-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <Cross2Icon className="unreal-h-4 unreal-w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("unreal-text-sm unreal-font-semibold [&+div]:unreal-text-xs", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("unreal-text-sm unreal-opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
