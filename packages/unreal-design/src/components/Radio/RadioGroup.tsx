import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactElement } from 'react';
interface UnrealRadioGroupProps extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {}
const RadioGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, UnrealRadioGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Root
        className={cn('unreal-grid unreal-gap-2', className)}
        {...props}
        ref={ref}
      />
    );
  }
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
export default RadioGroup as (
  props: UnrealRadioGroupProps,
  ref: ElementRef<typeof RadioGroupPrimitive.Root>
) => ReactElement;
export type { UnrealRadioGroupProps };
