import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';
import { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import { ClassNames } from '@wzx-unreal/react-hooks';
import { Loader2 } from 'lucide-react';
import './index.less';
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
        sm: 'unreal-h-6 unreal-rounded-md unreal-px-2 unreal-text-xs',
        default: 'unreal-h-8 unreal-px-4 unreal-py-1',
        lg: 'unreal-h-10 unreal-rounded-md unreal-px-4 unreal-py-2',
        // icon: 'unreal-h-9 unreal-w-9',
      },
      shape: {
        circle: 'unreal-rounded-[50%]',
        square: 'unreal-rounded-full',
      },
      icon: {
        true: 'button-only-icon',
      },
    },
    compoundVariants: [
      {
        shape: 'circle',
        size: 'sm',
        className: 'unreal-h-6 unreal-w-6',
      },
      {
        shape: 'circle',
        size: 'default',
        className: 'unreal-h-8 unreal-w-8 ',
      },
      {
        shape: 'circle',
        size: 'lg',
        className: 'unreal-h-10 unreal-w-10',
      },
      {
        icon: true,
        size: 'sm',
        className: 'button-only-icon-sm',
      },
      {
        icon: true,
        size: 'default',
        className: 'button-only-icon-default',
      },
      {
        icon: true,
        size: 'lg',
        className: 'button-only-icon-lg',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      asChild = false,
      disabled,
      children,
      icon,
      loading,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const classNames = ClassNames(cn(buttonVariants({ variant, size, className, shape, icon })));
    const _disabled = disabled || loading;
    return (
      <Comp disabled={_disabled} className={classNames} ref={ref} {...props}>
        {loading && <Loader2 className="unreal-mr-2 unreal-h-4 unreal-w-4 unreal-animate-spin" />}
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
