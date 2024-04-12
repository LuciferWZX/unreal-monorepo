import { nanoid } from 'nanoid';
import { match, P } from 'ts-pattern';

export const getId = (size: number = 10, prefix: string = '') => {
  return match(prefix)
    .with(
      P.when((p) => p.length >= size),
      () => {
        throw Error('prefix is too long');
      }
    )
    .otherwise((p) => {
      return p + nanoid(size - p.length);
    });
};
