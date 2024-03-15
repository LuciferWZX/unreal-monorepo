import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils"

const badgeVariants = cva(
  "unreal-inline-flex unreal-items-center unreal-rounded-md unreal-border unreal-px-2.5 unreal-py-0.5 unreal-text-xs unreal-font-semibold unreal-transition-colors focus:unreal-outline-none focus:unreal-ring-2 focus:unreal-ring-ring focus:unreal-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "unreal-border-transparent unreal-bg-primary unreal-text-primary-foreground unreal-shadow hover:unreal-bg-primary/80",
        secondary:
          "unreal-border-transparent unreal-bg-secondary unreal-text-secondary-foreground hover:unreal-bg-secondary/80",
        destructive:
          "unreal-border-transparent unreal-bg-destructive unreal-text-destructive-foreground unreal-shadow hover:unreal-bg-destructive/80",
        outline: "unreal-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
