import { DependencyList, EffectCallback, useEffect, useState } from 'react';
import {DebounceOptions} from "@/useDebounce/debounceOptions";
import useDebounceFn from "@/useDebounceFn";
import useUpdateEffect from "@/useUpdateEffect";

export function useDebounceEffect(
  effect: EffectCallback,
  deps?: DependencyList,
  options?: DebounceOptions
) {
  const [flag, setFlag] = useState({});
  const { run } = useDebounceFn(() => {
    setFlag({});
  }, options);
  useEffect(() => {
    run();
  }, deps);
  useUpdateEffect(effect, [flag]);
}
