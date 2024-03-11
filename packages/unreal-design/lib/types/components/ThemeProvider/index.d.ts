import { ReactNode } from 'react';
export type Theme = 'dark' | 'light' | 'system';
type ThemeProviderProps = {
    children: ReactNode;
    defaultTheme?: Theme;
    rootElement?: HTMLElement;
    storageKey?: string;
};
type ThemeProviderState = {
    theme: Theme;
    rootElement?: HTMLElement;
    setTheme: (theme: Theme) => void;
};
declare const ThemeProvider: (props: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeProviderState;
export default ThemeProvider;
