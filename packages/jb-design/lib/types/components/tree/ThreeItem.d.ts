import { CSSProperties, FC, MouseEvent, ReactNode } from 'react';
import { CheckboxProps } from '..';
interface TreeItemProps {
    className?: string;
    children: ReactNode;
    style?: CSSProperties;
    icon?: ReactNode | boolean;
    chevron?: boolean | ReactNode | ((isExpand?: boolean) => ReactNode);
    onClickChevron?: (e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, value?: string) => void;
    onDoubleClick?: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, value?: string) => void;
    indent?: number;
    hint?: ReactNode;
    value?: string;
    checkable?: boolean;
    checked?: boolean;
    checkboxProps?: CheckboxProps;
    onContextMenu?: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, value?: string) => void;
    onCheckedChange?: (checked: boolean) => void;
    isExpand?: boolean;
    onSelect?: (value: string) => void;
}
declare const ThreeItem: FC<TreeItemProps>;
export default ThreeItem;
