import './global.less'
import ReactDOM from 'react-dom/client'
import { createHashRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom'
import Layouts from '@renderer/layouts'
import BaseLayout from '@renderer/layouts/base'
import AuthLayout from '@renderer/layouts/auth'
import LoginPage from '@renderer/pages/authPage/loginPage'
import CodePage from './pages/codePage'
import CommentPage from './pages/commentPage'
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
            { path: '', element: <Navigate to="/comment" replace /> },
            {
              path: '/comment',
              element: <CommentPage />
            },
            {
              path: '/code',
              element: <CodePage />
            }
          ]
        },
        {
          path: '/auth',
          element: <AuthLayout />,
          children: [
            {
              path: '/auth',
              element: <Navigate to="/auth/login" replace />
            },
            {
              path: '/auth/login',
              element: <LoginPage />
            }
          ]
        }
      ]
    }
  ]
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={createHashRouter(initialRouter())} />
)
