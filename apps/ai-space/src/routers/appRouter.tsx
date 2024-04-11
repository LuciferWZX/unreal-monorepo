import { match } from 'ts-pattern';
import WelcomePage from '@/pages/welcome-page';
import GlobalLayouts from '@/layouts';
import NotFoundPage from '@/pages/404-page';
import BaseLayout from '@/layouts/base';
import WorkflowPage from '@/pages/workflow-page';

class AppRouter {
  initial = '/';
  welcome = '/welcome';
  not_found = '/not_found';
  workflow = '/workflow';

  getLayout(type: 'global' | 'base') {
    return match(type)
      .with('global', () => {
        return <GlobalLayouts />;
      })
      .with('base', () => {
        return <BaseLayout />;
      })
      .otherwise(() => {
        return null;
      });
  }
  getPages(path: string) {
    return match(path)
      .with(this.initial, () => {
        return <GlobalLayouts />;
      })
      .with(this.welcome, () => {
        return <WelcomePage />;
      })
      .with(this.not_found, () => {
        return <NotFoundPage />;
      })
      .with(this.workflow, () => {
        return <WorkflowPage />;
      })
      .otherwise(() => {
        return null;
      });
  }
}
const appRouter = new AppRouter();

export default appRouter;
