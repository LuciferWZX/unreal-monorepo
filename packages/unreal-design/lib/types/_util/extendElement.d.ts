import { CSSProperties, ReactElement } from 'react';
export declare const extendElement: (element: ReactElement, extProps: {
    className?: string;
    style?: CSSProperties;
}) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
