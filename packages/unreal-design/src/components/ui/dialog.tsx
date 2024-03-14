import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"

import { cn } from "@/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "unreal-fixed unreal-inset-0 unreal-z-50 unreal-bg-black/80 unreal- data-[state=open]:unreal-animate-in data-[state=closed]:unreal-animate-out data-[state=closed]:unreal-fade-out-0 data-[state=open]:unreal-fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "unreal-fixed unreal-left-[50%] unreal-top-[50%] unreal-z-50 unreal-grid unreal-w-full unreal-max-w-lg unreal-translate-x-[-50%] unreal-translate-y-[-50%] unreal-gap-4 unreal-border unreal-bg-background unreal-p-6 unreal-shadow-lg unreal-duration-200 data-[state=open]:unreal-animate-in data-[state=closed]:unreal-animate-out data-[state=closed]:unreal-fade-out-0 data-[state=open]:unreal-fade-in-0 data-[state=closed]:unreal-zoom-out-95 data-[state=open]:unreal-zoom-in-95 data-[state=closed]:unreal-slide-out-to-left-1/2 data-[state=closed]:unreal-slide-out-to-top-[48%] data-[state=open]:unreal-slide-in-from-left-1/2 data-[state=open]:unreal-slide-in-from-top-[48%] sm:unreal-rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="unreal-absolute unreal-right-4 unreal-top-4 unreal-rounded-sm unreal-opacity-70 unreal-ring-offset-background unreal-transition-opacity hover:unreal-opacity-100 focus:unreal-outline-none focus:unreal-ring-2 focus:unreal-ring-ring focus:unreal-ring-offset-2 disabled:unreal-pointer-events-none data-[state=open]:unreal-bg-accent data-[state=open]:unreal-text-muted-foreground">
        <Cross2Icon className="unreal-h-4 unreal-w-4" />
        <span className="unreal-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "unreal-flex unreal-flex-col unreal-space-y-1.5 unreal-text-center sm:unreal-text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "unreal-flex unreal-flex-col-reverse sm:unreal-flex-row sm:unreal-justify-end sm:unreal-space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "unreal-text-lg unreal-font-semibold unreal-leading-none unreal-tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("unreal-text-sm unreal-text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
