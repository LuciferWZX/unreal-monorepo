import { useEffect } from 'react';

const useTheme = () => {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  useEffect(() => {
    darkThemeMq.addEventListener('change',e => {
      if (e.matches) {
        document.body.setAttribute('arco-theme', 'dark');
      } else {
        document.body.removeAttribute('arco-theme');
      }
    });
  }, [darkThemeMq]);
}
export default useTheme