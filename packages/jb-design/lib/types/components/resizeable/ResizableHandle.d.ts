import * as ResizablePrimitive from 'react-resizable-panels';
import { ComponentProps } from 'react';
declare const ResizableHandle: ({ withHandle, className, ...props }: Omit<import("react").HTMLAttributes<keyof HTMLElementTagNameMap>, "id"> & {
    className?: string | undefined;
    disabled?: boolean | undefined;
    hitAreaMargins?: import("react-resizable-panels/dist/declarations/src/PanelResizeHandleRegistry").PointerHitAreaMargins | undefined;
    id?: string | null | undefined;
    onDragging?: ResizablePrimitive.PanelResizeHandleOnDragging | undefined;
    style?: import("react").CSSProperties | undefined;
    tabIndex?: number | undefined;
    tagName?: keyof HTMLElementTagNameMap | undefined;
} & {
    children?: import("react").ReactNode;
} & {
    withHandle?: boolean | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default ResizableHandle;
