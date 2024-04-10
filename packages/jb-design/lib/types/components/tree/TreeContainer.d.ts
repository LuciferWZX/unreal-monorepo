import { CSSProperties, FC, KeyboardEventHandler, ReactNode } from 'react';
interface TreeContainerProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    height?: number;
    width?: number;
    value?: string;
    onValueChange?: (value: string) => void;
    onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
}
declare const TreeContainer: FC<TreeContainerProps>;
export default TreeContainer;
