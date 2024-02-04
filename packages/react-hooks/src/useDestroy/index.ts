import { useEffect, useRef } from 'react';
import {isDev, isFunction} from "@/utils";

/**
 *  卸载组件的时候执行该方法
 * @param fn
 */
export function useDestroy(fn: Function) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useCreate expected parameter is a function,got ${typeof fn}`);
    }
  }
  const fnRef = useRef(fn);
  useEffect(() => () => fnRef.current(), []);
}
