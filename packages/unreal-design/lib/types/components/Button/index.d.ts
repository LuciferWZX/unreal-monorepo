import { type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';
declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
    icon?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
}
declare const Button: FC<ButtonProps>;
export { Button, buttonVariants };
