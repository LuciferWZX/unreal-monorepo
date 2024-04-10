import {
  CSSProperties,
  FormEventHandler,
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
  RefAttributes,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Checkbox from './Checkbox';
import { isNumber, isString } from '@wzx-unreal/react-hooks';
import GroupContext, { CheckboxGroupContext } from './GroupContext';
import { Space } from 'antd';

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
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  space?: number;
  style?: CSSProperties;
  customLayout?: boolean;
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
      direction = 'horizontal',
      align = 'center',
      space,
      customLayout,
      ...restProps
    } = props;
    const [value, setValue] = useState<T[]>(restProps.value || defaultValue || []);
    const [registeredValues, setRegisteredValues] = useState<T[]>([]);
    const mergedSize = useMemo(() => {
      if (direction === 'horizontal' && space === undefined) {
        return 16;
      }
      if (direction === 'vertical' && space === undefined) {
        return 0;
      }
      return space;
    }, [space, direction]);
    useEffect(() => {
      if ('value' in restProps) {
        setValue(restProps.value || []);
      }
    }, [restProps.value]);
    const toggleOption = (option: CheckboxOptionType<T>) => {
      const optionIndex = value.indexOf(option.value);
      const newValue = [...value];
      if (optionIndex === -1) {
        newValue.push(option.value);
      } else {
        newValue.splice(optionIndex, 1);
      }
      if (!('value' in restProps)) {
        setValue(newValue);
      }

      onChange?.(
        newValue
          .filter((val) => registeredValues.includes(val))
          .sort((a, b) => {
            const indexA = memoOptions.findIndex((opt) => opt.value === a);
            const indexB = memoOptions.findIndex((opt) => opt.value === b);
            return indexA - indexB;
          })
      );
    };
    const registerValue = (val: T) => {
      setRegisteredValues((prevValues) => [...prevValues, val]);
    };
    const cancelValue = (val: T) => {
      setRegisteredValues((prevValues) => prevValues.filter((v) => v !== val));
    };
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
          >
            {option.label}
          </Checkbox>
        ))
      : children;
    const context: CheckboxGroupContext = {
      name: restProps.name,
      value,
      disabled: restProps.disabled,
      toggleOption: (option) => toggleOption(option as CheckboxOptionType<T>),
      registerValue: (v) => registerValue(v as T),
      cancelValue: (v) => cancelValue(v as T),
    };
    if (customLayout) {
      return <GroupContext.Provider value={context}>{childrenNode}</GroupContext.Provider>;
    }
    return (
      <div className={className} style={style} ref={ref}>
        <GroupContext.Provider value={context}>
          <Space direction={direction} size={mergedSize} align={align}>
            {childrenNode}
          </Space>
        </GroupContext.Provider>
      </div>
    );
  }
);
export default CheckboxGroup as <T extends CheckboxValueType = CheckboxValueType>(
  props: CheckboxGroupProps<T> & RefAttributes<HTMLDivElement>
) => ReactElement;
