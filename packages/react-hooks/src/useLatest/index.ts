import { useRef } from 'react';

/**
 *  获取最新的值
 * @param value
 */
export function useLatest<T>(value: T) {
  const ref = useRef<T>(value);
  ref.current = value;
  return ref;
}
