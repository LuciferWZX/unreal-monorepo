import '@wzx-unreal/jb-design/lib/style.css';
import { useEffect, useState } from 'react';
import { Button } from '@wzx-unreal/jb-design';
function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.remove('light');
      root.classList.add(theme);
    } else {
      root.classList.remove('dark');
      root.classList.add(theme);
    }
  }, [theme]);
  return (
    <div
      style={{
        padding: 20,
        background: theme === 'dark' ? '#000' : '#fff',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Button
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      >
        切换
      </Button>
      <div style={{ margin: '40px 0' }}></div>
      <div>
        <Button style={{ marginRight: '10px' }}>Button</Button>
        <Button disabled={true}>disabled</Button>
      </div>
      <div style={{ margin: '40px 0' }}>
        <Button type={'primary'} style={{ marginRight: '10px' }}>
          Primary
        </Button>
        <Button type={'primary'} disabled={true}>
          disabled
        </Button>
      </div>
    </div>
  );
}

export default App;
