import { useMemo, useState } from 'react';

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}
export function useBoolean(defaultValue = false): [boolean, Actions] {
  const [state, setState] = useState<boolean>(defaultValue);
  const actions: Actions = useMemo(() => {
    return {
      setTrue: () => setState(true),
      setFalse: () => setState(false),
      set: (value) => setState(value),
      toggle: () => setState((state) => !state),
    };
  }, []);
  return [state, actions];
}
