/// <reference types="react" />
declare const CommandInput: import("react").ForwardRefExoticComponent<Omit<Omit<Pick<Pick<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof import("react").InputHTMLAttributes<HTMLInputElement>> & {
    ref?: import("react").Ref<HTMLInputElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "key" | "asChild" | keyof import("react").InputHTMLAttributes<HTMLInputElement>>, "type" | "onChange" | "value"> & {
    value?: string | undefined;
    onValueChange?: ((search: string) => void) | undefined;
} & import("react").RefAttributes<HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default CommandInput;
