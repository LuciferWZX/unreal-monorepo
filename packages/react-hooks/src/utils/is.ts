import { Dayjs } from 'dayjs';

const opt = Object.prototype.toString;

/**
 * 判断该对象是否是数组
 * @param obj
 */
export function isArray(obj: any): obj is any[] {
  return opt.call(obj) === '[object Array]';
}

/**
 *  判断该对象是否是对象
 * @param obj
 */
export function isObject(obj: any): obj is { [key: string]: any } {
  return opt.call(obj) === '[object Object]';
}

/**
 *  判断该对象是否是字符串
 * @param obj
 */
export function isString(obj: any): obj is string {
  return opt.call(obj) === '[object String]';
}
/**
 *  判断是否是数字  tips:obj === obj 是用来判断obj是否是NaN 在 JavaScript 中，NaN 是唯一一个不等于自身的值
 * @param obj
 */
export function isNumber(obj: any): obj is number {
  return opt.call(obj) === '[object Number]' && obj === obj;
}

/**
 *  判断该值是否是布尔
 * @param value
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

/**
 *  判断该对象是否是正则
 * @param obj
 */
export function isRegExp(obj: any): obj is RegExp {
  return opt.call(obj) === '[object RegExp]';
}

/**
 *  判断该对象是否是File 类型的对象
 * @param obj
 */
export function isFile(obj: any): obj is File {
  return opt.call(obj) === '[object File]';
}

/**
 *  判断该对象是否是Blob 类型的对象
 * @param obj
 */
export function isBlob(obj: any): obj is Blob {
  return opt.call(obj) === '[object Blob]';
}

/**
 *  判断该对象是否是undefined
 * @param obj
 */
export function isUndefined(obj: any): obj is undefined {
  return obj === undefined;
}

/**
 *  判断该对象是否是null
 * @param obj
 */
export function isNull(obj: any): obj is null {
  return obj === null;
}

/**
 *  判断该对象是否是null或者undefined
 * @param obj
 */
export function isNullOrUndefined(obj: any): boolean {
  return obj === null || obj === undefined;
}
/**
 *  判断该对象是否是函数
 * @param obj
 */
export function isFunction(obj: any): obj is (...args: any[]) => any {
  return typeof obj === 'function';
}

/**
 * 判断该对象是否是空对象
 * @param obj
 */
export function isEmptyObject(obj: any): boolean {
  return isObject(obj) && Object.keys(obj).length === 0;
}

/**
 *  判断该react节点是否是空节点
 * @param node
 */
export function isEmptyReactNode(node: any): boolean {
  return !node && (node === null || node === undefined || node === false || node === '');
}

/**
 * 判断该对象是否存在
 * @param obj
 */
export function isExist(obj: any): boolean {
  return obj || obj === 0;
}

/**
 *  判断该对象是否是window
 * @param obj
 */
export function isWindow(obj: any): obj is Window {
  return obj === window;
}

/**
 *  判断该对象是否是dayjs对象
 * @param time
 */
export function isDayjs(time: any): time is Dayjs {
  return (
    isObject(time) &&
    (('$y' in time &&
      '$M' in time &&
      '$D' in time &&
      '$d' in time &&
      '$H' in time &&
      '$m' in time &&
      '$s' in time) ||
      time._isAMomentObject)
  ); // 兼容 moment 的验证
}
function isHex(color: string) {
  return /^#[a-fA-F0-9]{3}$|#[a-fA-F0-9]{6}$/.test(color);
}

function isRgb(color: string) {
  return /^rgb\((\s*\d+\s*,?){3}\)$/.test(color);
}

function isRgba(color: string) {
  return /^rgba\((\s*\d+\s*,\s*){3}\s*\d(\.\d+)?\s*\)$/.test(color);
}

/**
 * 判断是否是颜色
 * @param color
 */
export function isColor(color: any): boolean {
  return isHex(color) || isRgb(color) || isRgba(color);
}
