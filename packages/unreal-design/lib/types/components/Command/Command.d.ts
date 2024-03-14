/// <reference types="react" />
declare const Command: import("react").ForwardRefExoticComponent<Omit<{
    children?: import("react").ReactNode;
} & Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "key" | "asChild" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    label?: string | undefined;
    shouldFilter?: boolean | undefined;
    filter?: ((value: string, search: string, keywords?: string[] | undefined) => number) | undefined;
    defaultValue?: string | undefined;
    value?: string | undefined;
    onValueChange?: ((value: string) => void) | undefined;
    loop?: boolean | undefined;
    disablePointerSelection?: boolean | undefined;
    vimBindings?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Command;
