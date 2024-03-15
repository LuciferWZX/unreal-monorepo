/// <reference types="react" />
declare const CommandList: import("react").ForwardRefExoticComponent<Omit<{
    children?: import("react").ReactNode;
} & Pick<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    ref?: import("react").Ref<HTMLDivElement> | undefined;
} & {
    asChild?: boolean | undefined;
}, "key" | "asChild" | keyof import("react").HTMLAttributes<HTMLDivElement>> & {
    label?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default CommandList;
