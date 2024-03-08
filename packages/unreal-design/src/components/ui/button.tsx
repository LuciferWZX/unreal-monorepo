import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

const buttonVariants = cva(
  'unreal-inline-flex unreal-items-center unreal-justify-center unreal-whitespace-nowrap unreal-rounded-md unreal-text-sm unreal-font-medium unreal-transition-colors focus-visible:unreal-outline-none focus-visible:unreal-ring-1 focus-visible:unreal-ring-ring disabled:unreal-pointer-events-none disabled:unreal-opacity-50',
  {
    variants: {
      variant: {
        default:
          'unreal-bg-primary unreal-text-primary-foreground unreal-shadow hover:unreal-bg-primary/90',
        destructive:
          'unreal-bg-destructive unreal-text-destructive-foreground unreal-shadow-sm hover:unreal-bg-destructive/90',
        outline:
          'unreal-border unreal-border-input unreal-bg-background unreal-shadow-sm hover:unreal-bg-accent hover:unreal-text-accent-foreground',
        secondary:
          'unreal-bg-secondary unreal-text-secondary-foreground unreal-shadow-sm hover:unreal-bg-secondary/80',
        ghost: 'hover:unreal-bg-accent hover:unreal-text-accent-foreground',
        link: 'unreal-text-primary unreal-underline-offset-4 hover:unreal-underline',
      },
      size: {
        default: 'unreal-h-9 unreal-px-4 unreal-py-2',
        sm: 'unreal-h-8 unreal-rounded-md unreal-px-3 unreal-text-xs',
        lg: 'unreal-h-10 unreal-rounded-md unreal-px-8',
        icon: 'unreal-h-9 unreal-w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
