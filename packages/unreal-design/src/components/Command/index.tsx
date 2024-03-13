import { FC } from 'react';
import Command from './Command';
import CommandInput from './CommandInput';
import CommandList from './CommandList';
import CommandEmpty from './CommandEmpty';
import CommandGroup from './CommandGroup';
import CommandItem from './CommandItem';
import CommandSeparator from './CommandSeparator';
import CommandShortcut from './CommandShortcut';
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import CommandDialog from './CommandDialog';
export interface CommandOptionItem {}
export interface UnrealCommandProps {
  placeholder?: string;
  options?: string[];
}
const UnrealCommand: FC<UnrealCommandProps> = (props) => {
  const { placeholder } = props;
  return (
    <Command
      onValueChange={(v) => {
        console.log(111, v);
      }}
      className="unreal-rounded-lg unreal-border unreal-shadow-md"
    >
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={(value) => console.log('Selected', value)} value={'a'}>
            <CalendarIcon className="unreal-mr-2 unreal-h-4 unreal-w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <FaceIcon className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <RocketIcon className="mr-2 h-4 w-4" />
            <span>Launch</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <PersonIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
            <span>Mail</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <GearIcon className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
UnrealCommand.displayName = 'UnrealCommand';
export default UnrealCommand;
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
