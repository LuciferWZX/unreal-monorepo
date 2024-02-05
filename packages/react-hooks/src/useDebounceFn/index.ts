
import { useMemo } from 'react';
import {DebounceOptions} from "@/useDebounce/debounceOptions";
import {debounce, isDev, isFunction} from "@/utils";
import {useLatest} from "@/useLatest";
import {useDestroy} from "@/useDestroy";

type noop = (...args: any[]) => any;
export function useDebounceFn<T extends noop>(fn: T, options?: DebounceOptions) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useDebounceFn expected parameter is a function, got ${typeof fn}`);
    }
  }
  const fnRef = useLatest(fn);
  const wait = options?.wait;
  const debounced = useMemo(
    () =>
      debounce(
        (...args: Parameters<T>): ReturnType<T> => {
          return fnRef.current(...args);
        },
        wait,
        options
      ),
    []
  );
  useDestroy(() => debounced.cancel());
  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush,
  };
}
export default useDebounceFn;
