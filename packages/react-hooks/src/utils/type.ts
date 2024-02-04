/**
 *  type Person = {
 *   name: string;
 *   age: number;
 *   id: string;
 * };
 * type NewPerson = Omit<Person, 'id'>;
 * type NewPerson = {
 *   name: string;
 *   age: number;
 * };
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/**
 * 通过使用 ValueOrFunc<T> 类型，我们可以灵活地处理既可以是值又可以是函数的情况
 */
export type ValueOrFunc<T> = T | ((args: any) => T);
