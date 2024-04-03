import { ButtonHTMLAttributes, CSSProperties, FC, forwardRef, ReactNode } from 'react';
import { cn } from '@/utils';
import './index.css';
import { ChevronDown } from '@/icons';
import { Dropdown } from 'antd';
import Command from './Command';
import CommandGroup from './CommandGroup';
import CommandItem from './CommandItem';
import CommandInput from './CommandInput';
import CommandList from './CommandList';
export interface SelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder?: string;
}
const Select: FC<SelectProps> = (props) => {
  const { className, placeholder } = props;
  const classes = cn('jb-select', className);
  const dropdownRender = (originNode: ReactNode) => {
    return (
      <div>
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandGroup>
              <CommandItem
                value={'1'}
                disabled={false}
                onSelect={(currentValue) => {
                  console.log(1);
                }}
              >
                xxx
              </CommandItem>
              <CommandItem
                disabled={false}
                value={'2'}
                onSelect={(currentValue) => {
                  console.log(2);
                }}
              >
                xxx
              </CommandItem>
              <CommandItem
                value={'3'}
                onSelect={(currentValue) => {
                  console.log(3);
                }}
              >
                xxx
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    );
  };
  return (
    <Dropdown trigger={['click']} dropdownRender={dropdownRender}>
      <button className={classes} {...props}>
        <span className={cn('jb-select-label')}>{placeholder}</span>
        <span className={cn('jb-select-chevron-down')}>
          <ChevronDown />
        </span>
      </button>
    </Dropdown>
  );
};
export default Select;
