import ReactDOM from 'react-dom/client'
import "@arco-design/web-react/dist/css/arco.min.css";
import './global.less'

import { createHashRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom';
import Layouts from '@/layouts';
import BaseLayout from '@/layouts/base';
import ReactCommentInputPage from '@/pages/react-comment-input-page';
import NotFoundPage from '@/pages/404-page';

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
            { path: '', element: <Navigate to="/react-comment-input" replace /> },
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
