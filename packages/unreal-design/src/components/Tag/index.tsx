import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';
import { X } from 'lucide-react';
import { extendElement } from '@/_util/extendElement';
import { FC, forwardRef, HTMLAttributes, MouseEventHandler, ReactElement } from 'react';

const TagVariants = cva(
  'unreal-inline-flex unreal-items-center unreal-rounded-md unreal-border unreal-px-2.5 unreal-py-0.5 unreal-text-xs unreal-font-semibold unreal-transition-colors focus:unreal-outline-none focus:unreal-ring-2 focus:unreal-ring-ring focus:unreal-ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'unreal-border-transparent unreal-bg-primary unreal-text-primary-foreground unreal-shadow hover:unreal-bg-primary/80',
        secondary:
          'unreal-border-transparent unreal-bg-secondary unreal-text-secondary-foreground hover:unreal-bg-secondary/80',
        destructive:
          'unreal-border-transparent unreal-bg-destructive unreal-text-destructive-foreground unreal-shadow hover:unreal-bg-destructive/80',
        outline: 'unreal-text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof TagVariants> {
  closeIcon?: ReactElement | boolean;
  onClose?: MouseEventHandler<HTMLSpanElement>;
  widthProps?: {
    maxWidth?: number;
    eclipse?: boolean;
  };
}

const Tag: FC<BadgeProps> = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const { closeIcon, className, onClose, variant, children, widthProps, ...restProps } = props;
  const getCloseIcon = (): ReactElement | undefined => {
    if (closeIcon) {
      if (typeof closeIcon === 'boolean' && closeIcon) {
        return <X />;
      }
      return closeIcon;
    }
  };
  return (
    <div ref={ref} className={cn(TagVariants({ variant }), className)} {...restProps}>
      <label
        className={cn('unreal-flex-1', {
          'unreal-overflow-hidden unreal-text-ellipsis unreal-whitespace-nowrap':
            widthProps?.eclipse,
        })}
      >
        {children}
      </label>
      {getCloseIcon() ? (
        <span className={'unreal-ml-1 '} onClick={onClose}>
          {extendElement(getCloseIcon() as ReactElement, {
            className:
              'unreal-h-4 unreal-w-4 unreal-cursor-pointer unreal-opacity-50 hover:unreal-opacity-100',
          })}
        </span>
      ) : null}
    </div>
  );
});

export { Tag, TagVariants };
