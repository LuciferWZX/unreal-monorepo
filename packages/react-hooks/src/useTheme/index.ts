import {useEffect, useMemo, useState} from "react";


export type BaseTheme = "light" | "dark" |"system";

export interface Actions{
    setLight: () => void;
    setDark: () => void;
    setSystem: () => void;
}
export const useTheme= <T extends BaseTheme>(defaultTheme:T,config?:{
    rootElement?:HTMLElement,
    storageKey?:string
}):[T,Actions] => {
    const [theme,setTheme]=useState<T>(()=>{
        return config?.storageKey?localStorage.getItem(config.storageKey) as T||defaultTheme:defaultTheme
    })
    useEffect(() => {
        const root = config?.rootElement || window.document.documentElement;
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
    const actions:Actions = {
        setDark:()=>setTheme('dark' as T),
        setLight:()=>setTheme('light'as T),
        setSystem:()=>setTheme('system'as T)
    }
    const returnTheme = useMemo(()=>{
        if (theme === 'system') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        }
        return theme
    },[theme])
    return [returnTheme as T,actions]
}