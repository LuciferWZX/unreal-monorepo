import { useState } from 'react';

const useContextMenuTarget = () => {
  const [key, setKey] = useState<string | null>(null);
  return {
    targetKey: key,
    setTargetKey: setKey,
  };
};
export default useContextMenuTarget;
