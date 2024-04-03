// import * as React from "react"
// import * as DialogPrimitive from "@radix-ui/react-dialog"
// import { Cross2Icon } from "@radix-ui/react-icons"
//
// import { cn } from "@/utils"
//
// const Dialog = DialogPrimitive.Root
//
// const DialogTrigger = DialogPrimitive.Trigger
//
// const DialogPortal = DialogPrimitive.Portal
//
// const DialogClose = DialogPrimitive.Close
//
// const DialogOverlay = React.forwardRef<
//   React.ElementRef<typeof DialogPrimitive.Overlay>,
//   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
// >(({ className, ...props }, ref) => (
//   <DialogPrimitive.Overlay
//     ref={ref}
//     className={cn(
//       "jb-fixed jb-inset-0 jb-z-50 jb-bg-black/80 jb- data-[state=open]:jb-animate-in data-[state=closed]:jb-animate-out data-[state=closed]:jb-fade-out-0 data-[state=open]:jb-fade-in-0",
//       className
//     )}
//     {...props}
//   />
// ))
// DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
//
// const DialogContent = React.forwardRef<
//   React.ElementRef<typeof DialogPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
// >(({ className, children, ...props }, ref) => (
//   <DialogPortal>
//     <DialogOverlay />
//     <DialogPrimitive.Content
//       ref={ref}
//       className={cn(
//         "jb-fixed jb-left-[50%] jb-top-[50%] jb-z-50 jb-grid jb-w-full jb-max-w-lg jb-translate-x-[-50%] jb-translate-y-[-50%] jb-gap-4 jb-border jb-bg-background jb-p-6 jb-shadow-lg jb-duration-200 data-[state=open]:jb-animate-in data-[state=closed]:jb-animate-out data-[state=closed]:jb-fade-out-0 data-[state=open]:jb-fade-in-0 data-[state=closed]:jb-zoom-out-95 data-[state=open]:jb-zoom-in-95 data-[state=closed]:jb-slide-out-to-left-1/2 data-[state=closed]:jb-slide-out-to-top-[48%] data-[state=open]:jb-slide-in-from-left-1/2 data-[state=open]:jb-slide-in-from-top-[48%] sm:jb-rounded-lg",
//         className
//       )}
//       {...props}
//     >
//       {children}
//       <DialogPrimitive.Close className="jb-absolute jb-right-4 jb-top-4 jb-rounded-sm jb-opacity-70 jb-ring-offset-background jb-transition-opacity hover:jb-opacity-100 focus:jb-outline-none focus:jb-ring-2 focus:jb-ring-ring focus:jb-ring-offset-2 disabled:jb-pointer-events-none data-[state=open]:jb-bg-accent data-[state=open]:jb-text-muted-foreground">
//         <Cross2Icon className="jb-h-4 jb-w-4" />
//         <span className="jb-sr-only">Close</span>
//       </DialogPrimitive.Close>
//     </DialogPrimitive.Content>
//   </DialogPortal>
// ))
// DialogContent.displayName = DialogPrimitive.Content.displayName
//
// const DialogHeader = ({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLDivElement>) => (
//   <div
//     className={cn(
//       "jb-flex jb-flex-col jb-space-y-1.5 jb-text-center sm:jb-text-left",
//       className
//     )}
//     {...props}
//   />
// )
// DialogHeader.displayName = "DialogHeader"
//
// const DialogFooter = ({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLDivElement>) => (
//   <div
//     className={cn(
//       "jb-flex jb-flex-col-reverse sm:jb-flex-row sm:jb-justify-end sm:jb-space-x-2",
//       className
//     )}
//     {...props}
//   />
// )
// DialogFooter.displayName = "DialogFooter"
//
// const DialogTitle = React.forwardRef<
//   React.ElementRef<typeof DialogPrimitive.Title>,
//   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
// >(({ className, ...props }, ref) => (
//   <DialogPrimitive.Title
//     ref={ref}
//     className={cn(
//       "jb-text-lg jb-font-semibold jb-leading-none jb-tracking-tight",
//       className
//     )}
//     {...props}
//   />
// ))
// DialogTitle.displayName = DialogPrimitive.Title.displayName
//
// const DialogDescription = React.forwardRef<
//   React.ElementRef<typeof DialogPrimitive.Description>,
//   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
// >(({ className, ...props }, ref) => (
//   <DialogPrimitive.Description
//     ref={ref}
//     className={cn("jb-text-sm jb-text-muted-foreground", className)}
//     {...props}
//   />
// ))
// DialogDescription.displayName = DialogPrimitive.Description.displayName
//
// export {
//   Dialog,
//   DialogPortal,
//   DialogOverlay,
//   DialogTrigger,
//   DialogClose,
//   DialogContent,
//   DialogHeader,
//   DialogFooter,
//   DialogTitle,
//   DialogDescription,
// }
