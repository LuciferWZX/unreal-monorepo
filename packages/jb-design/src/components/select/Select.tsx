import { ButtonHTMLAttributes, CSSProperties, FC, useMemo } from 'react';
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
export interface BaseOptionItem {
  className?: string;
  style?: CSSProperties;
  onClick?: (value: string) => void;
  disabled?: boolean;
}
export interface NormalOptionItem extends BaseOptionItem {
  type?: 'item';

  value: string;
  label: string;
}
export interface DividerOptionItem extends Omit<BaseOptionItem, 'onClick' | 'disabled'> {
  type: 'separator';
}
export interface SubOptionItem extends BaseOptionItem {
  type: 'sub';
  label: string;
  value: string;
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
  label: string;
  value: string;
  options: OptionItem[];
  classes?: {
    label?: string;
  };
  styles?: {
    label?: CSSProperties;
  };
}
export type OptionItem = NormalOptionItem | DividerOptionItem | SubOptionItem | GroupOptionItem;
export interface SelectProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  placeholder?: string;
  align?: 'center' | 'start' | 'end';
  options?: OptionItem[];
}
const Select: FC<SelectProps> = (props) => {
  const { className, placeholder, value, align = 'center', options = [], ...restProps } = props;
  const classes = cn('jb-select', className);

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
    return (
      <button className={classes} {...restProps}>
        <span className={cn('jb-select-label')}>{placeholder}</span>
        <span className={cn('jb-select-chevron-down')}>
          <ChevronDown />
        </span>
      </button>
    );
  }, []);
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
        console.log(111, mergedDisabled, option);
        return (
          <DropdownMenuSubContainer
            key={option.value}
            className={option.className}
            style={option.style}
          >
            <DropdownMenuSubTrigger
              disabled={mergedDisabled}
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

      return (
        <DropdownMenuItem
          key={option.value}
          disabled={mergedDisabled}
          onClick={() => {
            option.onClick?.(option.value);
          }}
          className={option.className}
          style={option.style}
        >
          {option.label}
        </DropdownMenuItem>
      );
    });
  };
  return (
    <DropdownMenuContainer onOpenChange={() => {}}>
      <DropdownMenuTrigger asChild={true}>{customRenderSelect}</DropdownMenuTrigger>
      <DropdownMenuContent align={align}>{renderOptions(options)}</DropdownMenuContent>
    </DropdownMenuContainer>
  );
};
export default Select;
