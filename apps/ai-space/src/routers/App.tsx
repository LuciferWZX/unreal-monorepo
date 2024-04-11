import { FC, useEffect } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { useAppStore } from '@/stores';
import { ThemeProvider } from '@wzx-unreal/jb-design';

const AIApp: FC = () => {
  const router = useAppStore((state) => state.router);
  useEffect(() => {
    useAppStore.getState().fetchRouter();
  }, []);
  const mergedRouter =
    router.length > 0
      ? router
      : [
          {
            path: '*',
            element: <div>数据加载中</div>,
          },
        ];
  return (
    <ThemeProvider defaultTheme="light" storageKey={'ai'}>
      <RouterProvider router={createHashRouter(mergedRouter)} />
    </ThemeProvider>
  );
};
export default AIApp;
