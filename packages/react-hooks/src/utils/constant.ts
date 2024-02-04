export const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
export const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);
export const NOOP = () => {};
