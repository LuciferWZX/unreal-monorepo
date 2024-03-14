/// <reference types="react" />
declare const CommandGroup: import("react").ForwardRefExoticComponent<Omit<{
    children?: import("react").ReactNode;
} & Omit<Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "key" | "asChild" | keyof import("react").HTMLAttributes<HTMLDivElement>>, "value" | "heading"> & {
    heading?: import("react").ReactNode;
    value?: string | undefined;
    forceMount?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default CommandGroup;
