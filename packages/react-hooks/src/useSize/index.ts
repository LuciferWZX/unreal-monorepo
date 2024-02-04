import { useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {BasicTarget, getTargetElement} from "@/utils";
import useIsomorphicLayoutEffectWithTarget from "@/useIsomorphicLayoutEffectWithTarget";

export type Size = {
  width: number;
  height: number;
};
export function useSize(target: BasicTarget): Size | undefined {
  const [state, setState] = useState<Size | undefined>(() => {
    const el = getTargetElement(target);
    return el ? { width: el.clientWidth, height: el.clientHeight } : undefined;
  });
  useIsomorphicLayoutEffectWithTarget(
    () => {
      const el = getTargetElement(target);
      if (!el) {
        return;
      }
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { clientHeight, clientWidth } = entry.target;
          setState({ width: clientWidth, height: clientHeight });
        }
      });
      resizeObserver.observe(el);
      return () => {
        resizeObserver.disconnect();
      };
    },
    [],
    target
  );
  return state;
}
