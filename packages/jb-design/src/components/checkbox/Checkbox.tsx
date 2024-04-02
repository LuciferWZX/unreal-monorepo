import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '@/utils';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useContext,
  useEffect,
  useRef,
} from 'react';

import GroupContext from './GroupContext';
import { isUndefined } from '@wzx-unreal/react-hooks';
import './index.css';
import { IndeterminateRounded, RoundCheck } from '@/icons';
export interface CheckboxProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  value?: any;
  skipGroup?: boolean;
  indeterminate?: boolean;
}
export type CheckboxRef = ElementRef<typeof CheckboxPrimitive.Root>;
const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(
  (
    {
      className,
      style,
      indeterminate = false,
      skipGroup = false,
      children,
      disabled,
      ...restProps
    },
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
    const checkboxProps: CheckboxProps = {
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
    const classes = cn(
      'jb-group',
      'jb-checkbox',
      { 'jb-checkbox-disabled': mergedDisabled },
      className
    );
    const labelClasses = cn('jb-checkbox-label');
    const primitiveClasses = cn('jb-peer', 'jb-checkbox-primitive');
    const indicatorClasses = cn('jb-checkbox-indicator');
    const checkedIconClasses = cn('jb-checkbox-checked-icon');
    return (
      <label className={classes} style={style}>
        <CheckboxPrimitive.Root
          ref={ref}
          className={primitiveClasses}
          // className={cn(
          //   'jb-peer jb-h-4 jb-w-4 jb-shrink-0 jb-rounded-sm jb-border jb-border-primary jb-shadow focus-visible:jb-outline-none focus-visible:jb-ring-1 focus-visible:jb-ring-ring disabled:jb-cursor-not-allowed disabled:jb-opacity-50 data-[state=checked]:jb-bg-primary data-[state=checked]:jb-text-primary-foreground ',
          //   className
          // )}
          aria-checked={ariaChecked}
          {...checkboxProps}
          disabled={mergedDisabled}
        >
          <CheckboxPrimitive.Indicator
            className={indicatorClasses}
            // className={cn('jb-flex jb-items-center jb-justify-center jb-text-current')}
          >
            {indeterminate ? (
              <IndeterminateRounded className={checkedIconClasses} />
            ) : (
              <RoundCheck className={checkedIconClasses} />
            )}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        {!isUndefined(children) && (
          <span
            className={labelClasses}
            // className={cn('jb-ml-0.5', `${disabled ? 'jb-opacity-50' : ''} `)}
          >
            {children}
          </span>
        )}
      </label>
    );
  }
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
