import '@wzx-unreal/jb-design/lib/style.css';
import { ThemeProvider } from '@wzx-unreal/jb-design';
import ButtonPage from './Button.tsx';
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ButtonPage />
    </ThemeProvider>
  );
}

export default App;
