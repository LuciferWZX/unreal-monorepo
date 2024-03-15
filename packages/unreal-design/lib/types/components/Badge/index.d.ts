import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const TagVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "outline" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof TagVariants> {
}
declare function Tag({ className, variant, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export { Tag, TagVariants };
