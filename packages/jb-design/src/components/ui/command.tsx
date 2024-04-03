// import * as React from "react"
// import { type DialogProps } from "@radix-ui/react-dialog"
// import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
// import { Command as CommandPrimitive } from "cmdk"
//
// import { cn } from "@/utils"
// import { Dialog, DialogContent } from "@/components/ui/dialog"
//
// const Command = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive>,
//   React.ComponentPropsWithoutRef<typeof CommandPrimitive>
// >(({ className, ...props }, ref) => (
//   <CommandPrimitive
//     ref={ref}
//     className={cn(
//       "jb-flex jb-h-full jb-w-full jb-flex-col jb-overflow-hidden jb-rounded-md jb-bg-popover jb-text-popover-foreground",
//       className
//     )}
//     {...props}
//   />
// ))
// Command.displayName = CommandPrimitive.displayName
//
// interface CommandDialogProps extends DialogProps {}
//
// const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
//   return (
//     <Dialog {...props}>
//       <DialogContent className="jb-overflow-hidden jb-p-0">
//         <Command className="[&_[cmdk-group-heading]]:jb-px-2 [&_[cmdk-group-heading]]:jb-font-medium [&_[cmdk-group-heading]]:jb-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:jb-pt-0 [&_[cmdk-group]]:jb-px-2 [&_[cmdk-input-wrapper]_svg]:jb-h-5 [&_[cmdk-input-wrapper]_svg]:jb-w-5 [&_[cmdk-input]]:jb-h-12 [&_[cmdk-item]]:jb-px-2 [&_[cmdk-item]]:jb-py-3 [&_[cmdk-item]_svg]:jb-h-5 [&_[cmdk-item]_svg]:jb-w-5">
//           {children}
//         </Command>
//       </DialogContent>
//     </Dialog>
//   )
// }
//
// const CommandInput = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive.Input>,
//   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
// >(({ className, ...props }, ref) => (
//   <div className="jb-flex jb-items-center jb-border-b jb-px-3" cmdk-input-wrapper="">
//     <MagnifyingGlassIcon className="jb-mr-2 jb-h-4 jb-w-4 jb-shrink-0 jb-opacity-50" />
//     <CommandPrimitive.Input
//       ref={ref}
//       className={cn(
//         "jb-flex jb-h-10 jb-w-full jb-rounded-md jb-bg-transparent jb-py-3 jb-text-sm jb-outline-none placeholder:jb-text-muted-foreground disabled:jb-cursor-not-allowed disabled:jb-opacity-50",
//         className
//       )}
//       {...props}
//     />
//   </div>
// ))
//
// CommandInput.displayName = CommandPrimitive.Input.displayName
//
// const CommandList = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive.List>,
//   React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
// >(({ className, ...props }, ref) => (
//   <CommandPrimitive.List
//     ref={ref}
//     className={cn("jb-max-h-[300px] jb-overflow-y-auto jb-overflow-x-hidden", className)}
//     {...props}
//   />
// ))
//
// CommandList.displayName = CommandPrimitive.List.displayName
//
// const CommandEmpty = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive.Empty>,
//   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
// >((props, ref) => (
//   <CommandPrimitive.Empty
//     ref={ref}
//     className="jb-py-6 jb-text-center jb-text-sm"
//     {...props}
//   />
// ))
//
// CommandEmpty.displayName = CommandPrimitive.Empty.displayName
//
// const CommandGroup = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive.Group>,
//   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
// >(({ className, ...props }, ref) => (
//   <CommandPrimitive.Group
//     ref={ref}
//     className={cn(
//       "jb-overflow-hidden jb-p-1 jb-text-foreground [&_[cmdk-group-heading]]:jb-px-2 [&_[cmdk-group-heading]]:jb-py-1.5 [&_[cmdk-group-heading]]:jb-text-xs [&_[cmdk-group-heading]]:jb-font-medium [&_[cmdk-group-heading]]:jb-text-muted-foreground",
//       className
//     )}
//     {...props}
//   />
// ))
//
// CommandGroup.displayName = CommandPrimitive.Group.displayName
//
// const CommandSeparator = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive.Separator>,
//   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
// >(({ className, ...props }, ref) => (
//   <CommandPrimitive.Separator
//     ref={ref}
//     className={cn("jb--mx-1 jb-h-px jb-bg-border", className)}
//     {...props}
//   />
// ))
// CommandSeparator.displayName = CommandPrimitive.Separator.displayName
//
// const CommandItem = React.forwardRef<
//   React.ElementRef<typeof CommandPrimitive.Item>,
//   React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
// >(({ className, ...props }, ref) => (
//   <CommandPrimitive.Item
//     ref={ref}
//     className={cn(
//       "jb-relative jb-flex jb-cursor-default jb-select-none jb-items-center jb-rounded-sm jb-px-2 jb-py-1.5 jb-text-sm jb-outline-none aria-selected:jb-bg-accent aria-selected:jb-text-accent-foreground data-[disabled]:jb-pointer-events-none data-[disabled]:jb-opacity-50",
//       className
//     )}
//     {...props}
//   />
// ))
//
// CommandItem.displayName = CommandPrimitive.Item.displayName
//
// const CommandShortcut = ({
//   className,
//   ...props
// }: React.HTMLAttributes<HTMLSpanElement>) => {
//   return (
//     <span
//       className={cn(
//         "jb-ml-auto jb-text-xs jb-tracking-widest jb-text-muted-foreground",
//         className
//       )}
//       {...props}
//     />
//   )
// }
// CommandShortcut.displayName = "CommandShortcut"
//
// export {
//   Command,
//   CommandDialog,
//   CommandInput,
//   CommandList,
//   CommandEmpty,
//   CommandGroup,
//   CommandItem,
//   CommandShortcut,
//   CommandSeparator,
// }
