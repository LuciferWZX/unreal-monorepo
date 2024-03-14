import { cloneElement, CSSProperties, FC, ReactElement, ReactNode } from 'react';
import Command from './Command';
import CommandInput from './CommandInput';
import CommandList from './CommandList';
import CommandEmpty from './CommandEmpty';
import CommandGroup from './CommandGroup';
import CommandItem from './CommandItem';
import CommandSeparator from './CommandSeparator';
import CommandShortcut from './CommandShortcut';
import CommandDialog from './CommandDialog';
import { ClassNames, isString } from '@wzx-unreal/react-hooks';
import CommandLoading from '@/components/Command/CommandLoading';
import { extendElement } from '@/_util/extendElement';
interface CommandOptionItem {
  label: ReactNode;
  value: string;
  onSelect?: (value: string) => void;
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  keywords?: string[];
  commandShortcut?: string;
}
interface CommandOptionGroup {
  heading: ReactNode;
  key?: string;
  children?: GroupChildrenType[];
  className?: string;
  style?: CSSProperties;
}
interface CommandSeparatorItem {
  type: 'separator';
  key?: string;
  className?: string;
  style?: CSSProperties;
}
interface UnrealCommandProps {
  placeholder?: string;
  options?: CommandOptionType[];
  classNames?: {
    className?: string;
    input?: string;
    list?: string;
    empty?: string;
    separator?: string;
    loading?: string;
  };
  styles?: {
    style?: CSSProperties;
    input?: CSSProperties;
    list?: CSSProperties;
    empty?: CSSProperties;
    separator?: CSSProperties;
    loading?: CSSProperties;
  };
  empty?: ReactNode;
  dialog?: boolean;
  dialogProps?: {
    container?: HTMLElement | null;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  };
  inputProps?: {
    value?: string;
    disabled?: boolean;
    readonly?: boolean;
    onValueChange?: (value: string) => void;
  };
  loadingProps?: {
    loading?: boolean;
    loadingText?: ReactNode;
  };
}
type GroupChildrenType = CommandOptionItem | CommandSeparatorItem;
type CommandOptionType = GroupChildrenType | CommandOptionGroup;

const UnrealCommand: FC<UnrealCommandProps> = (props) => {
  const {
    placeholder,
    classNames,
    styles,
    dialog,
    dialogProps,
    options,
    inputProps,
    loadingProps,
    empty = ' No results found.',
  } = props;
  const getCommandItem = (option: CommandOptionItem) => {
    return (
      <CommandItem
        disabled={option.disabled}
        key={option.value}
        value={option.value}
        onSelect={option.onSelect}
        keywords={option.keywords}
      >
        {option.icon &&
          extendElement(option.icon as ReactElement, {
            className: `unreal-mr-2 unreal-h-4 unreal-w-4`,
            style: {
              display: 'block',
            },
          })}
        {isString(option.label) ? <span>{option.label}</span> : option.label}
        {option.commandShortcut && <CommandShortcut>{option.commandShortcut}</CommandShortcut>}
      </CommandItem>
    );
  };
  const getCommandSeparatorItem = (option: CommandSeparatorItem, index: number) => {
    return (
      <CommandSeparator
        className={ClassNames(classNames?.separator, option.className)}
        style={{ ...styles?.separator, ...option.style }}
        key={option.key || index}
      />
    );
  };

  const commandContent = (
    <>
      <CommandInput
        className={ClassNames(classNames?.input, { 'unreal-mr-7': dialog })}
        style={styles?.style}
        {...inputProps}
        placeholder={placeholder}
      />
      <CommandList className={classNames?.list} style={styles?.list}>
        {loadingProps?.loading ? (
          <CommandLoading className={classNames?.loading} style={styles?.loading}>
            {loadingProps?.loadingText || 'Loading...'}
          </CommandLoading>
        ) : (
          <>
            <CommandEmpty className={classNames?.empty} style={styles?.empty}>
              {empty}
            </CommandEmpty>
            {options?.map((option, index) => {
              if ('heading' in option) {
                return (
                  <CommandGroup key={option.key || index} heading={option.heading}>
                    {option.children?.map((child, index) => {
                      if ('type' in child) {
                        return getCommandSeparatorItem(child, index);
                      }
                      return getCommandItem(child);
                    })}
                  </CommandGroup>
                );
              }
              if ('type' in option) {
                if (option.type === 'separator') {
                  return getCommandSeparatorItem(option, index);
                }
                return <div key={option.key || index} />;
              }
              return getCommandItem(option);
            })}
          </>
        )}
      </CommandList>
    </>
  );
  if (dialog) {
    return <CommandDialog {...dialogProps}>{commandContent}</CommandDialog>;
  }
  return (
    <Command
      className={ClassNames(
        'unreal-rounded-lg unreal-border unreal-shadow-md',
        classNames?.className
      )}
      style={styles?.style}
    >
      {commandContent}
    </Command>
  );
};
UnrealCommand.displayName = 'UnrealCommand';
export default UnrealCommand;
export type { CommandOptionItem, CommandOptionGroup, CommandOptionType, GroupChildrenType };
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
