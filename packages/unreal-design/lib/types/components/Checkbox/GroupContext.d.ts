/// <reference types="react" />
import type { CheckboxOptionType, CheckboxValueType } from './Group';
export interface CheckboxGroupContext<T extends CheckboxValueType = CheckboxValueType> {
    name?: string;
    toggleOption?: (option: CheckboxOptionType) => void;
    value?: any;
    disabled?: boolean;
}
declare const GroupContext: import("react").Context<CheckboxGroupContext<CheckboxValueType> | null>;
export default GroupContext;
