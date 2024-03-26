import ReactDOM from 'react-dom/client';
import '@arco-design/web-react/dist/css/arco.min.css';
import './global.less';

import { createHashRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom';
import Layouts from '@/layouts';
import BaseLayout from '@/layouts/base';
import ReactCommentInputPage from '@/pages/react-comment-input-page';
import NotFoundPage from '@/pages/404-page';
import UnrealDesignPage from '@/pages/unreal-design-page';
import ButtonPage from '@/pages/unreal-design-page/button-page';
import ScrollAreaPage from '@/pages/unreal-design-page/scroll-area-page';
import DropdownMenuPage from '@/pages/unreal-design-page/dropdown-menu-page';
import InputPage from './pages/unreal-design-page/input-page';
import CheckBoxPage from '@/pages/unreal-design-page/check-box-page';
import PopoverPage from '@/pages/unreal-design-page/popover-page';
import CommandPage from '@/pages/unreal-design-page/command-page';
import DialogPage from '@/pages/unreal-design-page/dialog-page';
import TooltipPage from '@/pages/unreal-design-page/tooltip-page';
import SonnerPage from '@/pages/unreal-design-page/sonner-page';
import ToastPage from '@/pages/unreal-design-page/toast-page';
import RadioGroupPage from '@/pages/unreal-design-page/radio-group-page';
import TagPage from '@/pages/unreal-design-page/tag-page';
import JbDesginPage from './pages/jb-desgin';

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
            { path: '', element: <Navigate to="/jb-design" replace /> },
            {
              path: '/jb-design',
              element: <JbDesginPage />,
              // children: [],
            },
            {
              path: '/unreal-design',
              element: <UnrealDesignPage />,
              children: [
                {
                  path: '/unreal-design',
                  element: <Navigate to="/unreal-design/popover" replace />,
                },
                {
                  path: '/unreal-design/input',
                  element: <InputPage />,
                },
                {
                  path: '/unreal-design/checkBox',
                  element: <CheckBoxPage />,
                },
                {
                  path: '/unreal-design/button',
                  element: <ButtonPage />,
                },
                {
                  path: '/unreal-design/dropdownMenu',
                  element: <DropdownMenuPage />,
                },
                {
                  path: '/unreal-design/scrollArea',
                  element: <ScrollAreaPage />,
                },
                {
                  path: '/unreal-design/popover',
                  element: <PopoverPage />,
                },
                {
                  path: '/unreal-design/command',
                  element: <CommandPage />,
                },
                {
                  path: '/unreal-design/dialog',
                  element: <DialogPage />,
                },
                {
                  path: '/unreal-design/tooltip',
                  element: <TooltipPage />,
                },
                {
                  path: '/unreal-design/sonner',
                  element: <SonnerPage />,
                },
                {
                  path: '/unreal-design/toast',
                  element: <ToastPage />,
                },
                {
                  path: '/unreal-design/radio-group',
                  element: <RadioGroupPage />,
                },
                {
                  path: '/unreal-design/tag',
                  element: <TagPage />,
                },
              ],
            },
            {
              path: '/react-comment-input',
              element: <ReactCommentInputPage />,
            },
          ],
        },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ];
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={createHashRouter(initialRouter())} />
);
