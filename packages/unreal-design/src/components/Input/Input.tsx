import { cn } from '@/utils';
import { forwardRef, useRef } from 'react';
import { useControllableValue } from '@wzx-unreal/react-hooks';
import RcInput, { InputProps as RcInputProps, InputRef } from 'rc-input';
import { composeRef } from 'rc-util/lib/ref';
import './index.less';
import getAllowClear from '@/_util/getAllowClear';
export interface InputProps extends RcInputProps {}
export type { InputRef };
const Input = forwardRef<InputRef, InputProps>(({ className, allowClear, type, ...props }, ref) => {
  const [state, setState] = useControllableValue(props, { defaultValue: '' });
  const inputRef = useRef<InputRef>(null);
  const mergedAllowClear = getAllowClear(allowClear);
  return (
    <RcInput
      ref={composeRef(ref, inputRef)}
      classNames={{
        affixWrapper: `affixWrapper ${!state ? 'affixWrapperHideClear' : ''}`,
        input: 'placeholder:unreal-text-muted-foreground unreal-bg-transparent ',
      }}
      className={cn(
        `unreal-flex unreal-h-9 unreal-w-full unreal-rounded-md unreal-border unreal-border-input unreal-px-3 unreal-py-1 unreal-text-sm unreal-shadow-sm unreal-transition-colors`,
        `${props.disabled ? 'unreal-cursor-not-allowed unreal-opacity-50' : ''}`,
        `focus-within:unreal-outline-none focus-within:unreal-ring-1 unreal-ring-ring `,
        className
      )}
      allowClear={props.disabled ? false : mergedAllowClear}
      {...props}
      value={state}
      onChange={(e) => setState(e.target.value)}
    />
  );
});

export default Input;
