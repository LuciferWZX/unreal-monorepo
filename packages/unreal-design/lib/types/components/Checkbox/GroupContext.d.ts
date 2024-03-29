/// <reference types="react" />
import type { CheckboxOptionType, CheckboxValueType } from './Group';
export interface CheckboxGroupContext<T extends CheckboxValueType = CheckboxValueType> {
    name?: string;
    toggleOption?: (option: CheckboxOptionType) => void;
    value?: any;
    disabled?: boolean;
    registerValue: (val: T) => void;
    cancelValue: (val: T) => void;
}
declare const GroupContext: import("react").Context<CheckboxGroupContext<CheckboxValueType> | null>;
export default GroupContext;
