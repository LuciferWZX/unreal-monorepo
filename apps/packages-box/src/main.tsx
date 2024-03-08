import ReactDOM from 'react-dom/client'
import "@arco-design/web-react/dist/css/arco.min.css";
import './global.less'

import { createHashRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom';
import Layouts from '@/layouts';
import BaseLayout from '@/layouts/base';
import ReactCommentInputPage from '@/pages/react-comment-input-page';
import NotFoundPage from '@/pages/404-page';
import UnrealDesignPage from '@/pages/unreal-design-page';
import ButtonPage from '@/pages/unreal-design-page/button-page';
import ScrollAreaPage from '@/pages/unreal-design-page/scroll-area-page';

const initialRouter = (): RouteObject[] => {
  return [
    {
      path: '/',
      element: <Layouts />,
      children: [
        {
          path: '',
          element: <BaseLayout />,
          children: [
            { path: '', element: <Navigate to="/unreal-design" replace /> },
            {
              path: '/unreal-design',
              element: <UnrealDesignPage />,
              children: [
                { path: '/unreal-design', element: <Navigate to="/unreal-design/button" replace /> },
                {
                  path: '/unreal-design/button',
                  element: <ButtonPage />
                },
                {
                  path: '/unreal-design/scrollArea',
                  element: <ScrollAreaPage />
                },
              ]
            },
            {
              path: '/react-comment-input',
              element: <ReactCommentInputPage />
            },

          ]
        },
        {path:"*",element:<NotFoundPage/>}
      ]
    }
  ]
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={createHashRouter(initialRouter())} />,
)
