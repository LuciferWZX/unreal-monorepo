import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { cn } from '@/utils';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { isUndefined } from '@wzx-unreal/react-hooks';
import GroupContext from '@/components/Checkbox/GroupContext';
import { Minus } from 'lucide-react';

export interface UnrealCheckboxProps
  extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  value?: any;
  skipGroup?: boolean;
  indeterminate?: boolean;
}
export type CheckboxRef = ElementRef<typeof CheckboxPrimitive.Root>;
const UnrealCheckbox = forwardRef<CheckboxRef, UnrealCheckboxProps>(
  (
    { className, indeterminate = false, skipGroup = false, children, disabled, ...restProps },
    ref
  ) => {
    const checkboxGroup = useContext(GroupContext);
    const preValue = useRef(restProps.value);
    const mergedDisabled = checkboxGroup?.disabled || disabled;
    useEffect(() => {
      checkboxGroup?.registerValue(restProps.value);
    }, []);
    useEffect(() => {
      if (skipGroup) {
        return;
      }
      if (restProps.value !== preValue.current) {
        checkboxGroup?.cancelValue(preValue.current);
        checkboxGroup?.registerValue(restProps.value);
        preValue.current = restProps.value;
      }
      return () => checkboxGroup?.cancelValue(restProps.value);
    }, [restProps.value]);
    const checkboxProps: UnrealCheckboxProps = {
      ...restProps,
    };

    if (checkboxGroup && !skipGroup) {
      checkboxProps.onCheckedChange = (...args) => {
        if (restProps.onCheckedChange) {
          restProps.onCheckedChange?.(...args);
        }
        if (checkboxGroup.toggleOption) {
          checkboxGroup.toggleOption({ label: children, value: restProps.value });
        }
      };
      checkboxProps.name = checkboxGroup.name;
      checkboxProps.checked = checkboxGroup.value?.includes(restProps.value);
    }
    const ariaChecked = indeterminate ? 'mixed' : undefined;
    return (
      <label
        className={cn(
          'unreal-flex unreal-items-center unreal-space-x-2 ',
          `${disabled ? 'unreal-cursor-not-allowed' : ''} `
        )}
      >
        <CheckboxPrimitive.Root
          ref={ref}
          className={cn(
            'unreal-peer unreal-h-4 unreal-w-4 unreal-shrink-0 unreal-rounded-sm unreal-border unreal-border-primary unreal-shadow focus-visible:unreal-outline-none focus-visible:unreal-ring-1 focus-visible:unreal-ring-ring disabled:unreal-cursor-not-allowed disabled:unreal-opacity-50 data-[state=checked]:unreal-bg-primary data-[state=checked]:unreal-text-primary-foreground',
            className
          )}
          aria-checked={ariaChecked}
          {...checkboxProps}
          disabled={mergedDisabled}
        >
          <CheckboxPrimitive.Indicator
            className={cn(
              'unreal-flex unreal-items-center unreal-justify-center unreal-text-current'
            )}
          >
            {indeterminate ? (
              <Minus className="unreal-h-4 unreal-w-4" />
            ) : (
              <CheckIcon className="unreal-h-4 unreal-w-4" />
            )}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {!isUndefined(children) && (
          <span className={cn('unreal-ml-0.5', `${disabled ? 'unreal-opacity-50' : ''} `)}>
            {children}
          </span>
        )}
      </label>
    );
  }
);
UnrealCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export default UnrealCheckbox;
