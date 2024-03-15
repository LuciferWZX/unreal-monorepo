import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@/utils';
import { CheckIcon } from '@radix-ui/react-icons';
import {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementRef,
  forwardRef,
  ReactElement,
  ReactNode,
} from 'react';
import { extendElement } from '@/_util/extendElement';
import { ClassNames } from '@wzx-unreal/react-hooks';

type RadioGroupItemProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
interface RadioProps extends Omit<RadioGroupItemProps, 'children'> {
  label?: ReactNode;
  outClassName?: string;
  indicator?: {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
  };
}
type RadioGroupItemRef = ElementRef<typeof RadioGroupPrimitive.Item>;
const RadioGroupItem = forwardRef<RadioGroupItemRef, RadioProps>(
  ({ className, outClassName, label, indicator, ...props }, ref) => {
    return (
      <label
        data-disabled={props.disabled}
        className={cn(
          'unreal-flex unreal-items-center data-[disabled="true"]:unreal-cursor-not-allowed data-[disabled="true"]:unreal-opacity-50 disabled:unreal-opacity-50',
          outClassName
        )}
      >
        <RadioGroupPrimitive.Item
          ref={ref}
          className={cn(
            'unreal-aspect-square unreal-h-4 unreal-w-4 unreal-rounded-full unreal-border unreal-border-primary unreal-text-primary unreal-shadow focus:unreal-outline-none focus-visible:unreal-ring-1 focus-visible:unreal-ring-ring disabled:unreal-cursor-not-allowed disabled:unreal-opacity-50',
            '',
            className
          )}
          {...props}
        >
          <RadioGroupPrimitive.Indicator
            // className="unreal-flex unreal-items-center unreal-justify-center"
            className={ClassNames(
              {
                "unreal-flex unreal-items-center unreal-justify-center unreal-w-full unreal-h-full unreal-relative after:unreal-content-[''] after:unreal-block after:unreal-w-2.5 after:unreal-h-2.5 after:unreal-rounded-[50%] after:unreal-bg-primary ":
                  !indicator,
                'unreal-flex unreal-items-center unreal-justify-center': indicator,
              },
              indicator?.className
            )}
            style={indicator?.style}
          >
            {indicator?.children &&
              extendElement(
                (typeof indicator?.children === 'string' ? (
                  <span
                    className={'unreal-flex unreal-items-center unreal-justify-center'}
                    style={{ display: 'flex' }}
                  >
                    {indicator?.children}
                  </span>
                ) : (
                  indicator?.children
                )) as ReactElement,
                {
                  className: `unreal-h-3.5 unreal-w-3.5 unreal-fill-primary`,
                  style: {
                    display: 'block',
                  },
                }
              )}
            {/*<CheckIcon className="unreal-h-3.5 unreal-w-3.5 unreal-fill-primary" />*/}
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        <span className={'unreal-ml-1'}>{label}</span>
      </label>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
export default RadioGroupItem;
export type { RadioProps, RadioGroupItemRef };
