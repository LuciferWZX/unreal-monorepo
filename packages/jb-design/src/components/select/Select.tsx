import {
  ButtonHTMLAttributes,
  CSSProperties,
  FC,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cn } from '@/utils';
import './index.css';
import { ChevronDown } from '@/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubContainer,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/dropdown';
import DropdownMenuContainer from '../dropdown/DropdownMenuContainer';
import { isArray, isUndefined, useSize } from '@wzx-unreal/react-hooks';
export interface BaseOptionItem {
  className?: string;
  style?: CSSProperties;
  onClick?: (value: string | number) => void;
  disabled?: boolean;
}
export interface NormalOptionItem extends BaseOptionItem {
  type?: 'item';

  value: string | number;
  label: ReactNode;
}
export interface DividerOptionItem extends Omit<BaseOptionItem, 'onClick' | 'disabled'> {
  type: 'separator';
}
export interface SubOptionItem extends BaseOptionItem {
  type: 'sub';
  label: ReactNode;
  value: string | number;
  options: OptionItem[];
  classes?: {
    content?: string;
    trigger?: string;
  };
  styles?: {
    content?: CSSProperties;
    trigger?: CSSProperties;
  };
}
export interface GroupOptionItem extends BaseOptionItem {
  type: 'group';
  label: ReactNode;
  value: string | number;
  options: OptionItem[];
  classes?: {
    label?: string;
  };
  styles?: {
    label?: CSSProperties;
  };
}
export type OptionItem = NormalOptionItem | DividerOptionItem | SubOptionItem | GroupOptionItem;
export type SelectValueType = (string | number)[] | string | number | boolean | undefined;
export interface SelectProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value' | 'defaultValue'> {
  placeholder?: string;
  align?: 'center' | 'start' | 'end';
  options?: OptionItem[];
  open?: boolean;
  popupMatchSelectWidth?: boolean;
  value?: SelectValueType;
  defaultValue?: SelectValueType;
  mode?: 'single' | 'multiple';
  onChange?: (value: SelectValueType) => void;
  customSelected?: (item: OptionItem) => ReactNode;
}
const Select: FC<SelectProps> = (props) => {
  const {
    className,
    placeholder,
    value,
    defaultValue,
    onChange,
    align = 'center',
    options = [],
    mode = 'single',
    customSelected,
    open,
    popupMatchSelectWidth = true,
    ...restProps
  } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const size = useSize(buttonRef);
  const [_value, _setValue] = useState<SelectValueType>(defaultValue ?? undefined);
  const [_open, setOpen] = useState<boolean | undefined>(undefined);
  const mergedOpen = useMemo(() => {
    return open ?? _open;
  }, [_open, open]);
  const mergedValue = useMemo(() => {
    return value ?? _value;
  }, [_value, value]);
  if (mergedValue) {
    if (mode === 'multiple') {
      if (!isArray(mergedValue)) {
        throw Error('value should be an array');
      }
    } else {
      if (isArray(mergedValue)) {
        throw Error('value should not be string or number');
      }
    }
  }

  const mergedOnChange = useMemo(() => {
    return (value: SelectValueType) => {
      _setValue(value);
      onChange?.(value);
    };
  }, [onChange]);

  const classes = cn('jb-select', className);
  const getSelectedItem = (
    _opts: OptionItem[],
    _target: string | number | boolean | undefined
  ): OptionItem | undefined => {
    for (const _op of _opts) {
      if ('value' in _op) {
        if (_op.value === _target) {
          return _op;
        }
        if ('options' in _op) {
          if (_op.options && _op.options.length > 0) {
            const foundObject = getSelectedItem(_op.options, _target);
            if (foundObject) {
              return foundObject;
            }
          }
        }
      }
    }
    return undefined;
  };
  // const dropdownRender = (originNode: ReactNode) => {
  //   return (
  //     <Command className={cn('jb-select-menu')}>
  //       <CommandInput placeholder="Search framework..." className="h-9" />
  //       <CommandList>
  //         <CommandGroup>
  //           <CommandItem
  //             value={'1'}
  //             disabled={false}
  //             onSelect={(currentValue) => {
  //               console.log(1);
  //             }}
  //           >
  //             xxx
  //           </CommandItem>
  //           <CommandItem
  //             disabled={false}
  //             value={'2'}
  //             onSelect={(currentValue) => {
  //               console.log(2);
  //             }}
  //           >
  //             xxx
  //           </CommandItem>
  //           <CommandItem
  //             value={'3'}
  //             onSelect={(currentValue) => {
  //               console.log(3);
  //             }}
  //           >
  //             xxx
  //           </CommandItem>
  //         </CommandGroup>
  //       </CommandList>
  //     </Command>
  //   );
  // };
  const customRenderSelect = useMemo(() => {
    let child: ReactNode = placeholder;
    if (!isUndefined(mergedValue)) {
      if (mode === 'single' && !isArray(mergedValue)) {
        const selectedItem = getSelectedItem(options, mergedValue);
        if (selectedItem) {
          if (customSelected) {
            child = customSelected(selectedItem);
          } else {
            if ('label' in selectedItem) {
              child = selectedItem.label ?? selectedItem.value;
            }
          }
        }
      }
    }

    return (
      <button ref={buttonRef} className={classes} {...restProps}>
        <span className={cn('jb-select-label')}>{child}</span>
        <span className={cn('jb-select-chevron-down')}>
          <ChevronDown />
        </span>
      </button>
    );
  }, [mergedValue, classes, placeholder, restProps]);
  const renderOptions = (_options: OptionItem[], _disabled?: boolean) => {
    return _options?.map((option, index) => {
      const mergedDisabled = 'disabled' in option ? option.disabled : _disabled;

      if (option.type === 'separator') {
        return (
          <DropdownMenuSeparator key={index} className={option.className} style={option.style} />
        );
      }
      if (option.type === 'group') {
        return (
          <DropdownMenuGroup
            key={option.value}
            aria-disabled={mergedDisabled}
            style={option.style}
            className={option.className}
          >
            <DropdownMenuLabel className={option.classes?.label} style={option.styles?.label}>
              {option.label}
            </DropdownMenuLabel>
            {renderOptions(option.options, true)}
          </DropdownMenuGroup>
        );
      }
      if (option.type === 'sub') {
        return (
          <DropdownMenuSubContainer
            key={option.value}
            className={option.className}
            style={option.style}
          >
            <DropdownMenuSubTrigger
              disabled={mergedDisabled}
              indeterminate={true}
              className={option.classes?.trigger}
              style={option.styles?.trigger}
              onClick={() => {
                option.onClick?.(option.value);
              }}
            >
              {option.label}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent
              aria-disabled={mergedDisabled}
              className={option.classes?.content}
              style={option.styles?.content}
            >
              {renderOptions(option.options, mergedDisabled)}
            </DropdownMenuSubContent>
          </DropdownMenuSubContainer>
        );
      }
      const checked = isArray(mergedValue)
        ? mergedValue.includes(option.value)
        : mergedValue === option.value;
      return (
        <DropdownMenuItem
          key={option.value}
          disabled={mergedDisabled}
          onClick={(e) => {
            if (mode === 'multiple') {
              e.preventDefault();
              if (!mergedValue) {
                mergedOnChange([option.value]);
              }

              if (isArray(mergedValue)) {
                if (mergedValue.includes(option.value)) {
                  mergedOnChange(mergedValue.filter((item) => item !== option.value));
                } else {
                  mergedOnChange([...mergedValue, option.value]);
                }
              }
            } else {
              mergedOnChange(option.value);
            }
            option.onClick?.(option.value);
          }}
          className={option.className}
          style={option.style}
          checked={checked}
        >
          {option.label}
        </DropdownMenuItem>
      );
    });
  };
  const matchWidthStyle: CSSProperties = {
    width: size?.width,
  };
  console.log(111, size?.width);
  return (
    <DropdownMenuContainer open={mergedOpen} onOpenChange={setOpen}>
      <DropdownMenuTrigger disabled={props.disabled} asChild={true}>
        {customRenderSelect}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        style={popupMatchSelectWidth ? matchWidthStyle : undefined}
        align={align}
      >
        {renderOptions(options)}
      </DropdownMenuContent>
    </DropdownMenuContainer>
  );
};
export default Select;
