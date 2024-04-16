import { ReactNode } from 'react';
type Theme = 'dark' | 'light' | 'system';
type ThemeProviderProps = {
    children: ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};
type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
export declare function ThemeProvider({ children, defaultTheme, storageKey, ...props }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeProviderState;
export {};
