// import * as React from "react"
// import * as TogglePrimitive from "@radix-ui/react-toggle"
// import { cva, type VariantProps } from "class-variance-authority"
//
// import { cn } from "@/utils"
//
// const toggleVariants = cva(
//   "jb-inline-flex jb-items-center jb-justify-center jb-rounded-md jb-text-sm jb-font-medium jb-transition-colors hover:jb-bg-muted hover:jb-text-muted-foreground focus-visible:jb-outline-none focus-visible:jb-ring-1 focus-visible:jb-ring-ring disabled:jb-pointer-events-none disabled:jb-opacity-50 data-[state=on]:jb-bg-accent data-[state=on]:jb-text-accent-foreground",
//   {
//     variants: {
//       variant: {
//         default: "jb-bg-transparent",
//         outline:
//           "jb-border jb-border-input jb-bg-transparent jb-shadow-sm hover:jb-bg-accent hover:jb-text-accent-foreground",
//       },
//       size: {
//         default: "jb-h-9 jb-px-3",
//         sm: "jb-h-8 jb-px-2",
//         lg: "jb-h-10 jb-px-3",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )
//
// const Toggle = React.forwardRef<
//   React.ElementRef<typeof TogglePrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
//     VariantProps<typeof toggleVariants>
// >(({ className, variant, size, ...props }, ref) => (
//   <TogglePrimitive.Root
//     ref={ref}
//     className={cn(toggleVariants({ variant, size, className }))}
//     {...props}
//   />
// ))
//
// Toggle.displayName = TogglePrimitive.Root.displayName
//
// export { Toggle, toggleVariants }
