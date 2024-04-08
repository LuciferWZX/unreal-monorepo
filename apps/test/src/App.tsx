import '@wzx-unreal/jb-design/lib/style.css';
import { ThemeProvider } from '@wzx-unreal/jb-design';
import Demo from './Demo.tsx';
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Demo />
    </ThemeProvider>
  );
}

export default App;
