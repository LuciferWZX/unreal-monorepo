import { useEffect } from 'react';
import { isDev, isFunction } from '@/utils';

/**
 * 用于初始化执行一次
 * @param fn
 */
export function useCreate(fn: Function) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useCreate expected parameter is a function,got ${typeof fn}`);
    }
  }
  useEffect(() => {
    fn();
  }, [fn]);
}
