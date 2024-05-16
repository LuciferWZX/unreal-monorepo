import { nanoid } from 'nanoid';
export function createRandomId() {
  return nanoid() + '_' + new Date().getTime().toString(32);
}

export function createUUID() {
  return nanoid();
}
