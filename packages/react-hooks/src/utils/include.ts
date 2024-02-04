// return an object with specify keys
/**
 * const user = {
 *   name: 'John',
 *   age: 30,
 *   email: 'john@example.com'
 * };
 * const selectedProps = include(user, ['name', 'email']);
 * console.log(selectedProps); // 输出: { name: 'John', email: 'john@example.com' }
 * @param obj
 * @param keys
 */
export default function include<T extends object, K extends keyof T>(
  obj: T,
  keys: Array<K | string>
): Partial<T> /** TODO: Pick */ {
  const clone: Partial<T> = {};
  Object.keys(obj).forEach((key) => {
    if (keys.indexOf(key) !== -1) {
      clone[key as K] = obj[key as K];
    }
  });
  return clone;
}
