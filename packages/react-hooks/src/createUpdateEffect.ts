import { useEffect, useLayoutEffect, useRef } from 'react';

type EffectHookType = typeof useEffect | typeof useLayoutEffect;
export const createUpdateEffect: (hook: EffectHookType) => EffectHookType = (hook) => {
  return (effect, deps) => {
    const isMounted = useRef(false);
    hook(() => {
      return () => {
        isMounted.current = false;
      };
    }, []);
    hook(() => {
      if (!isMounted.current) {
        isMounted.current = true;
      } else {
        return effect();
      }
    }, deps);
  };
};
