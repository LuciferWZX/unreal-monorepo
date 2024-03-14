import { CSSProperties, FC, ReactNode } from 'react';
import Command from './Command';
import CommandInput from './CommandInput';
import CommandList from './CommandList';
import CommandEmpty from './CommandEmpty';
import CommandGroup from './CommandGroup';
import CommandItem from './CommandItem';
import CommandSeparator from './CommandSeparator';
import CommandShortcut from './CommandShortcut';
import CommandDialog from './CommandDialog';
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
declare const UnrealCommand: FC<UnrealCommandProps>;
export default UnrealCommand;
export type { CommandOptionItem, CommandOptionGroup, CommandOptionType, GroupChildrenType };
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator, };
