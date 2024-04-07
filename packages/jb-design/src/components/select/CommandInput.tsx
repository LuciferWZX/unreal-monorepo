import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="jb-flex jb-items-center  jb-px-3" cmdk-input-wrapper="">
    {/*<MagnifyingGlassIcon className="jb-mr-2 jb-h-4 jb-w-4 jb-shrink-0 jb-opacity-50" />*/}
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'jb-flex jb-h-10 jb-w-full jb-rounded-md jb-bg-transparent jb-py-3 jb-text-sm jb-outline-none placeholder:jb-text-muted-foreground disabled:jb-cursor-not-allowed disabled:jb-opacity-50',
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;
export default CommandInput;
