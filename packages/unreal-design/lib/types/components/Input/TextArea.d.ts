/// <reference types="react" />
import { TextAreaRef } from 'rc-textarea';
declare const Textarea: import("react").ForwardRefExoticComponent<Omit<import("rc-textarea/lib/interface").HTMLTextareaProps, "onResize" | "value"> & {
    value?: string | number | bigint | readonly string[] | undefined;
    prefixCls?: string | undefined;
    className?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    autoSize?: boolean | import("rc-textarea").AutoSizeType | undefined;
    onPressEnter?: import("react").KeyboardEventHandler<HTMLTextAreaElement> | undefined;
    onResize?: ((size: {
        width: number;
        height: number;
    }) => void) | undefined;
    classNames?: ({
        affixWrapper?: string | undefined;
        prefix?: string | undefined;
        suffix?: string | undefined;
        groupWrapper?: string | undefined;
        wrapper?: string | undefined;
        variant?: string | undefined;
    } & {
        textarea?: string | undefined;
        count?: string | undefined;
    }) | undefined;
    styles?: {
        textarea?: import("react").CSSProperties | undefined;
        count?: import("react").CSSProperties | undefined;
    } | undefined;
} & Pick<import("rc-input/lib/interface").BaseInputProps, "allowClear" | "suffix"> & Pick<import("rc-input").InputProps, "showCount" | "count"> & import("react").RefAttributes<TextAreaRef>>;
export default Textarea;
