import * as React from 'react';
import { type DialogProps } from '@radix-ui/react-dialog';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import CommandShortcut from '../Command/CommandShortcut';
import CommandItem from '../Command/CommandItem';
import CommandSeparator from '../Command/CommandSeparator';
import CommandGroup from '../Command/CommandGroup';
import CommandEmpty from '../Command/CommandEmpty';
import CommandList from '../Command/CommandList';
import CommandInput from '../Command/CommandInput';
import CommandDialog from '../Command/CommandDialog';
import Command from '../Command/Command';

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
