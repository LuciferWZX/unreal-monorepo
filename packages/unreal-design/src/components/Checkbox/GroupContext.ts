import type { CheckboxOptionType, CheckboxValueType } from './Group';
import { createContext } from 'react';

export interface CheckboxGroupContext<T extends CheckboxValueType = CheckboxValueType> {
  name?: string;
  toggleOption?: (option: CheckboxOptionType) => void;
  value?: any;
  disabled?: boolean;
}
const GroupContext = createContext<CheckboxGroupContext | null>(null);
export default GroupContext;
