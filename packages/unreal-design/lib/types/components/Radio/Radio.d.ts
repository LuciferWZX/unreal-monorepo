import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { ComponentPropsWithoutRef, CSSProperties, ElementRef, ReactNode } from 'react';
type RadioGroupItemProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
interface RadioProps extends Omit<RadioGroupItemProps, 'children'> {
    label?: ReactNode;
    outClassName?: string;
    indicator?: {
        children: ReactNode;
        className?: string;
        style?: CSSProperties;
    };
}
type RadioGroupItemRef = ElementRef<typeof RadioGroupPrimitive.Item>;
declare const RadioGroupItem: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLButtonElement>>;
export default RadioGroupItem;
export type { RadioProps, RadioGroupItemRef };
