import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

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
const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);
const ThemeProvider = (props: ThemeProviderProps) => {
  const {
    children,
    rootElement,
    defaultTheme = 'system',
    storageKey = 'unreal-ui-theme',
    ...restProps
  } = props;
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  useEffect(() => {
    const root = rootElement ?? document.documentElement;
    root.classList.remove('light', 'dark');
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      document.body.setAttribute(storageKey, systemTheme);

      root.classList.add(systemTheme);
      return;
    }
    document.body.setAttribute(storageKey, theme);
    root.classList.add(theme);
  }, [rootElement, theme]);
  const value: ThemeProviderState = {
    theme,
    setTheme: (_theme) => {
      localStorage.setItem(storageKey, _theme);
      setTheme(_theme);
    },
  };
  return (
    <ThemeProviderContext.Provider {...restProps} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
export default ThemeProvider;
