import { FC } from 'react';
import Command from './Command';
import CommandInput from './CommandInput';
import CommandList from './CommandList';
import CommandEmpty from './CommandEmpty';
import CommandGroup from './CommandGroup';
import CommandItem from './CommandItem';
import CommandSeparator from './CommandSeparator';
import CommandShortcut from './CommandShortcut';
import CommandDialog from './CommandDialog';
export interface CommandOptionItem {
}
export interface UnrealCommandProps {
    placeholder?: string;
    options?: string[];
}
declare const UnrealCommand: FC<UnrealCommandProps>;
export default UnrealCommand;
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator, };
