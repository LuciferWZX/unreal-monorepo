import { FC } from 'react';
import '@wzx-unreal/unreal-design/lib/style.css';
import { Outlet } from 'react-router-dom';

const UnrealDesignPage: FC = () => {
  return (
    <div style={{ flex: 1, overflow: 'hidden' }}>
      <Outlet />
    </div>
  );
};
export default UnrealDesignPage;
