import { useLocation } from 'react-router-dom';

const usePath = () => {
  const location = useLocation();
  return {
    pathname: location.pathname,
  };
};
export default usePath;
