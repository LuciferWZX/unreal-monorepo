import * as React from "react"

import { cn } from "@/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "unreal-flex unreal-h-9 unreal-w-full unreal-rounded-md unreal-border unreal-border-input unreal-bg-transparent unreal-px-3 unreal-py-1 unreal-text-sm unreal-shadow-sm unreal-transition-colors file:unreal-border-0 file:unreal-bg-transparent file:unreal-text-sm file:unreal-font-medium placeholder:unreal-text-muted-foreground focus-visible:unreal-outline-none focus-visible:unreal-ring-1 focus-visible:unreal-ring-ring disabled:unreal-cursor-not-allowed disabled:unreal-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
