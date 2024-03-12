import {
  CSSProperties,
  FormEventHandler,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Checkbox from './Checkbox';
import { isNumber, isString } from '@wzx-unreal/react-hooks';
import GroupContext, { CheckboxGroupContext } from './GroupContext';

export type CheckboxValueType = string | number | boolean;
export interface CheckboxOptionType<T extends CheckboxValueType = CheckboxValueType> {
  label: ReactNode;
  value: T;
  style?: CSSProperties;
  disabled?: boolean;
  title?: string;
  id?: string;
  onChange?: FormEventHandler<HTMLButtonElement>;
}
export interface CheckboxGroupProps<T extends CheckboxValueType = CheckboxValueType> {
  name?: string;
  defaultValue?: T[];
  value?: T[];
  onChange?: (checkedValues: T[]) => void;
  children?: ReactNode;
  options?: (CheckboxOptionType<T> | string | number)[];
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}
const CheckboxGroup = forwardRef(
  <T extends CheckboxValueType = CheckboxValueType>(
    props: CheckboxGroupProps<T>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const {
      defaultValue,
      children,
      style,
      onChange,
      className,
      options = [],
      ...restProps
    } = props;
    const [value, setValue] = useState<T[]>(restProps.value || defaultValue || []);

    useEffect(() => {
      if ('value' in restProps) {
        setValue(restProps.value || []);
      }
    }, [restProps.value]);

    const memoOptions = useMemo<CheckboxOptionType<T>[]>(
      () =>
        options.map<CheckboxOptionType<T>>((option) => {
          if (isString(option) || isNumber(option)) {
            return {
              label: option,
              value: option,
            } as CheckboxOptionType<T>;
          }
          return option;
        }),
      [options]
    );
    const childrenNode = options.length
      ? memoOptions.map<ReactNode>((option) => (
          <Checkbox
            key={option.value.toString()}
            disabled={'disabled' in option ? option.disabled : restProps.disabled}
            value={option.value}
            checked={value.includes(option.value as T)}
            onChange={option.onChange}
          />
        ))
      : children;
    const context: CheckboxGroupContext = {
      name: restProps.name,
      value,
      disabled: restProps.disabled,
    };
    return (
      <div className={className} style={style} ref={ref}>
        <GroupContext.Provider value={context}>{childrenNode}</GroupContext.Provider>
      </div>
    );
  }
);
export default CheckboxGroup;
