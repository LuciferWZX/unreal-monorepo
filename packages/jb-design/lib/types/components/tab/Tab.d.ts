import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ComponentPropsWithoutRef, ReactNode, MouseEvent as ReMouseEvent, CSSProperties } from 'react';
export interface TabOptions {
    value: string;
    label?: ReactNode;
    icon?: ReactNode;
    closeIcon?: ReactNode;
    closeable?: boolean;
    disabled?: boolean;
    content?: ReactNode;
    classes?: {
        icon?: string;
        content?: string;
        closeIcon?: string;
    };
    styles?: {
        icon?: CSSProperties;
        content?: CSSProperties;
        closeIcon?: CSSProperties;
    };
    onClose?: (e: ReMouseEvent<HTMLSpanElement, MouseEvent>, value: string) => void;
}
export declare const Tabs: import("react").ForwardRefExoticComponent<TabsPrimitive.TabsProps & import("react").RefAttributes<HTMLDivElement>>;
type BaseTabProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;
export interface TabProps extends BaseTabProps {
    options?: TabOptions[];
    actions?: ReactNode;
    tabProps?: {
        hideScrollY?: boolean;
        hideScrollX?: boolean;
    };
    classes?: {
        tab?: string;
        tabItem?: string;
        content?: string;
    };
    styles?: {
        tab?: CSSProperties;
        tabItem?: CSSProperties;
        content?: CSSProperties;
    };
}
declare const Tab: import("react").ForwardRefExoticComponent<TabProps & import("react").RefAttributes<HTMLDivElement>>;
export default Tab;
