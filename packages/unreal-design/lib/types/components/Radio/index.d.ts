import { RadioProps } from './Radio';
import { UnrealRadioGroupProps } from './RadioGroup';
import { FC } from 'react';
interface RadioGroupProps extends Omit<UnrealRadioGroupProps, 'children'> {
    options?: RadioProps[];
    direction?: 'vertical' | 'horizontal';
}
declare const RadioGroup: FC<RadioGroupProps>;
export default RadioGroup;
export type { RadioGroupProps, RadioProps };
