import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light' | 'system';
type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};
type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);
const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, defaultTheme = 'system', storageKey = 'unreal-ui-theme', ...restProps } = props;
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);
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
