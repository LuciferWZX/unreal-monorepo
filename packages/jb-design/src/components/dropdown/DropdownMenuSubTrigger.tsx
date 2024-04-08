import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '@/utils';
import './index.css';
import { ChevronRight, IndeterminateRounded, RoundCheck } from '@/icons';
import { ReactNode, useMemo } from 'react';
import { isBoolean, isUndefined } from '@wzx-unreal/react-hooks';
const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
    rightChevron?: boolean | ReactNode;
    rightChevronClassName?: string;
    checked?: boolean;
    indeterminate?: boolean;
  }
>(
  (
    {
      className,
      checked,
      indeterminate,
      inset,
      rightChevron,
      rightChevronClassName,
      children,
      ...props
    },
    ref
  ) => {
    const renderRightChevron = useMemo(() => {
      if (rightChevron === false) {
        return null;
      }
      if (!isBoolean(rightChevron) && !isUndefined(rightChevron)) {
        return (
          <span className={cn('jb-chevron-right', rightChevronClassName)}>{rightChevron}</span>
        );
      }
      return (
        <span className={cn('jb-chevron-right', rightChevronClassName)}>
          <ChevronRight />
        </span>
      );
    }, [rightChevron, rightChevronClassName]);
    return (
      <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        className={cn(
          'jb-group',
          'jb-dropdown-menu-item',
          'jb-w-full',
          inset && 'jb-pl-8',
          className
        )}
        // className={cn(
        //   'jb-flex jb-cursor-default jb-select-none jb-items-center jb-rounded-sm jb-px-2 jb-py-1.5 jb-text-sm jb-outline-none focus:jb-bg-accent data-[state=open]:jb-bg-accent',
        //   inset && 'jb-pl-8',
        //   className
        // )}
        {...props}
      >
        <div className={cn('jb-dropdown-menu-item-content')}>
          <span className={cn('jb-dropdown-menu-item-checked')}>
            {checked ? <RoundCheck /> : indeterminate ? <IndeterminateRounded /> : null}
          </span>
          <div className={cn('jb-dropdown-menu-item-label')}>{children}</div>
          {renderRightChevron}
        </div>
        {/*<ChevronRightIcon className="jb-ml-auto jb-h-4 jb-w-4" />*/}
      </DropdownMenuPrimitive.SubTrigger>
    );
  }
);
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
export default DropdownMenuSubTrigger;
