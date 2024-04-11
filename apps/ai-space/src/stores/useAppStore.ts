import { create } from 'zustand';
import { RouteObject } from 'react-router-dom';
import { Router } from '@/routers';

interface AppStoreType {
  router: RouteObject[];
}
interface AppStoreActionsType {
  fetchRouter: () => void;
}
const initialValue: AppStoreType = {
  router: [],
};
const useAppStore = create<AppStoreType & AppStoreActionsType>((set) => ({
  ...initialValue,
  fetchRouter: () => {
    set({ router: Router.getRouter() });
  },
}));
export default useAppStore;
