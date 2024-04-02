import type { CheckboxOptionType, CheckboxValueType } from './Group';
import { createContext } from 'react';

export interface CheckboxGroupContext<T extends CheckboxValueType = CheckboxValueType> {
  name?: string;
  toggleOption?: (option: CheckboxOptionType) => void;
  value?: any;
  disabled?: boolean;
  registerValue: (val: T) => void;
  cancelValue: (val: T) => void;
}
const GroupContext = createContext<CheckboxGroupContext | null>(null);
export default GroupContext;
