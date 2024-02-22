import './global.less'
import ReactDOM from 'react-dom/client'
import { createHashRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom'
import Layouts from '@renderer/layouts'
import BaseLayout from '@renderer/layouts/base'
import ExcelTablePage from '@renderer/pages/excelTablePage'
import AuthLayout from '@renderer/layouts/auth'
import LoginPage from '@renderer/pages/authPage/loginPage'
import TextTemplatePage from './pages/textTemplatePage'
import ChatPage from './pages/chatPage'
import CodePage from './pages/codePage'
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
            { path: '', element: <Navigate to="/code" replace /> },
            {
              path: '/chat',
              element: <ChatPage />
            },
            {
              path: '/code',
              element: <CodePage />
            },
            {
              path: '/text_template',
              element: <TextTemplatePage />
            },
            {
              path: '/excel_table',
              element: <ExcelTablePage />
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
