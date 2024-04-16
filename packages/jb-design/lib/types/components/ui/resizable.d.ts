/// <reference types="react" />
import * as ResizablePrimitive from 'react-resizable-panels';
declare const ResizablePanelGroup: ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => import("react/jsx-runtime").JSX.Element;
declare const ResizablePanel: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<keyof HTMLElementTagNameMap>, "id" | "onResize"> & {
    className?: string | undefined;
    collapsedSize?: number | undefined;
    collapsible?: boolean | undefined;
    defaultSize?: number | undefined;
    id?: string | undefined;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    onCollapse?: ResizablePrimitive.PanelOnCollapse | undefined;
    onExpand?: ResizablePrimitive.PanelOnExpand | undefined;
    onResize?: ResizablePrimitive.PanelOnResize | undefined;
    order?: number | undefined;
    style?: object | undefined;
    tagName?: keyof HTMLElementTagNameMap | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<ResizablePrimitive.ImperativePanelHandle>>;
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
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
