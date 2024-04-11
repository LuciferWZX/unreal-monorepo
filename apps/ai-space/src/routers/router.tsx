import { Navigate, RouteObject } from 'react-router-dom';
import appRouter from '@/routers/appRouter.tsx';

class Router {
  initialRouter: RouteObject[] = [
    {
      path: appRouter.initial,
      element: appRouter.getLayout('global'),
      children: [
        {
          path: '',
          element: appRouter.getLayout('base'),
          children: [
            { path: '', element: <Navigate to={appRouter.welcome} replace /> },
            {
              path: appRouter.welcome,
              element: appRouter.getPages(appRouter.welcome),
            },
            {
              path: appRouter.workflow,
              element: appRouter.getPages(appRouter.workflow),
            },
          ],
        },

        { path: '*', element: appRouter.getPages(appRouter.not_found) },
      ],
    },
  ];

  getRouter() {
    return this.initialRouter;
  }
}
const router = new Router();
export default router;
