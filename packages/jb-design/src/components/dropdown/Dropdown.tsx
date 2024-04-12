import { CSSProperties, FC, MouseEvent, ReactNode, useMemo, useState } from 'react';
import DropdownMenuContainer from './DropdownMenuContainer';
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubContainer,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './index';
import { match, P } from 'ts-pattern';

export interface BaseOptionItem {
  className?: string;
  style?: CSSProperties;
  onClick?: (value: string | number, e: MouseEvent) => void;
  disabled?: boolean;
}
export interface NormalOptionItem extends BaseOptionItem {
  type?: 'item';
  value: string | number;
  label: ReactNode;
  icon?: boolean;
  checked?: boolean;
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
interface DropdownProps {
  defaultValue?: SelectValueType;
  open?: boolean;
  options?: OptionItem[];
  children?: ReactNode;
  disabled?: boolean;
  asChild?: boolean;
  align?: 'center' | 'start' | 'end';
}
const Dropdown: FC<DropdownProps> = (props) => {
  const { open, align, asChild = true, options = [], children } = props;
  const [_open, setOpen] = useState<boolean | undefined>(undefined);
  const mergedOpen = useMemo(() => {
    return open ?? _open;
  }, [_open, open]);

  const renderOptions = (_options: OptionItem[], _disabled?: boolean) => {
    return _options?.map((option, index) => {
      // const mergedDisabled = 'disabled' in option ? option.disabled : _disabled;
      const mergedDisabled = match(option)
        .with({ disabled: P.not(undefined) }, (o) => o.disabled)
        .otherwise(() => _disabled);
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
            {renderOptions(option.options, mergedDisabled)}
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
              // indeterminate={true}
              className={option.classes?.trigger}
              style={option.styles?.trigger}
              onClick={(e) => {
                option.onClick?.(option.value, e);
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

      return (
        <DropdownMenuItem
          key={option.value}
          disabled={mergedDisabled}
          icon={option.icon}
          onClick={(e) => {
            option.onClick?.(option.value, e);
          }}
          checked={option.checked}
          className={option.className}
          style={option.style}
        >
          {option.label}
        </DropdownMenuItem>
      );
    });
  };
  return (
    <DropdownMenuContainer open={mergedOpen} onOpenChange={setOpen}>
      <DropdownMenuTrigger disabled={props.disabled} asChild={asChild}>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>{renderOptions(options)}</DropdownMenuContent>
    </DropdownMenuContainer>
  );
};
export default Dropdown;
