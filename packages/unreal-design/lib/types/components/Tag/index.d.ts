import { type VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes, MouseEventHandler, ReactElement } from 'react';
declare const TagVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof TagVariants> {
    closeIcon?: ReactElement | boolean;
    onClose?: MouseEventHandler<HTMLSpanElement>;
    widthProps?: {
        maxWidth?: number;
        eclipse?: boolean;
    };
}
declare const Tag: FC<BadgeProps>;
export { Tag, TagVariants };
