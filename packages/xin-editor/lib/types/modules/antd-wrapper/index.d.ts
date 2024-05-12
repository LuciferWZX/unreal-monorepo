import { FC, ReactNode } from 'react';
interface AntdWrapperProps {
    theme?: 'dark' | 'light' | 'system';
    children?: ReactNode;
}
declare const AntdWrapper: FC<AntdWrapperProps>;
export default AntdWrapper;
