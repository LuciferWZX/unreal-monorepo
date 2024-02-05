import { DebounceOptions } from './debounceOptions';
import { useEffect, useState } from 'react';
import useDebounceFn from "@/useDebounceFn";

export function useDebounce<T>(value: T, options?: DebounceOptions) {
  const [debounced, setDebounced] = useState(value);
  const { run } = useDebounceFn(() => {
    setDebounced(value);
  }, options);
  useEffect(() => {
    run();
  }, [value]);
  return debounced;
}
