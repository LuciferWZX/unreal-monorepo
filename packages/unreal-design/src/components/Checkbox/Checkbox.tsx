import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { isUndefined } from '@wzx-unreal/react-hooks';

export interface UnrealCheckboxProps
  extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  value?: any;
}
export type CheckboxRef = ElementRef<typeof CheckboxPrimitive.Root>;
const UnrealCheckbox = forwardRef<CheckboxRef, UnrealCheckboxProps>(
  ({ className, onChange, children, ...props }, ref) => (
    <label className="unreal-flex unreal-items-center unreal-space-x-2">
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          'unreal-peer unreal-h-4 unreal-w-4 unreal-shrink-0 unreal-rounded-sm unreal-border unreal-border-primary unreal-shadow focus-visible:unreal-outline-none focus-visible:unreal-ring-1 focus-visible:unreal-ring-ring disabled:unreal-cursor-not-allowed disabled:unreal-opacity-50 data-[state=checked]:unreal-bg-primary data-[state=checked]:unreal-text-primary-foreground',
          className
        )}
        {...props}
        onChange={(e) => onChange?.(e)}
      >
        <CheckboxPrimitive.Indicator
          className={cn(
            'unreal-flex unreal-items-center unreal-justify-center unreal-text-current'
          )}
        >
          <CheckIcon className="unreal-h-4 unreal-w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {!isUndefined(children) && <span className={'unreal-ml-0.5'}>{children}</span>}
    </label>
  )
);
UnrealCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export default UnrealCheckbox;
