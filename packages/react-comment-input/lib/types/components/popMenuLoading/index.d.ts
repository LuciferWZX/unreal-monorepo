import { CSSProperties, FC } from 'react';
interface LoadingProps {
    text?: string;
    className?: string;
    theme?: 'dark' | 'light';
    style?: CSSProperties;
}
declare const PopMenuLoading: FC<LoadingProps>;
export default PopMenuLoading;
