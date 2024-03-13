import RcTextarea, { TextAreaProps, TextAreaRef } from 'rc-textarea';

import { cn } from '@/utils';
import { forwardRef, useRef } from 'react';
import './index.less';
import { useControllableValue } from '@wzx-unreal/react-hooks';
import getAllowClear from '@/_util/getAllowClear';
import { composeRef } from 'rc-util/lib/ref';
const Textarea = forwardRef<TextAreaRef, TextAreaProps>(
  ({ className, allowClear, ...props }, ref) => {
    const [state, setState] = useControllableValue(props, { defaultValue: '' });
    const textAreaRef = useRef<TextAreaRef>(null);
    const mergedAllowClear = getAllowClear(allowClear);
    return (
      <RcTextarea
        ref={composeRef(ref, textAreaRef)}
        classNames={{
          affixWrapper: `affixTextareaWrapper ${!state ? 'affixWrapperHideClear' : ''}`,
          suffix: `${mergedAllowClear ? 'unreal-input-suffix' : ''}`,
          textarea: cn(
            'unreal-flex unreal-min-h-10 unreal-h-20 unreal-w-full unreal-rounded-md unreal-border unreal-border-input unreal-bg-transparent unreal-px-3 unreal-py-2 unreal-text-sm unreal-shadow-sm placeholder:unreal-text-muted-foreground focus-visible:unreal-outline-none focus-visible:unreal-ring-1 focus-visible:unreal-ring-ring disabled:unreal-cursor-not-allowed disabled:unreal-opacity-50',
            `${mergedAllowClear ? 'unreal-pr-5' : ''}`
          ),
        }}
        className={cn(
          //'unreal-flex unreal-min-h-10 unreal-h-20 unreal-w-full unreal-rounded-md unreal-border unreal-border-input unreal-bg-transparent unreal-px-3 unreal-py-2 unreal-text-sm unreal-shadow-sm placeholder:unreal-text-muted-foreground focus-visible:unreal-outline-none focus-visible:unreal-ring-1 focus-visible:unreal-ring-ring disabled:unreal-cursor-not-allowed disabled:unreal-opacity-50',
          className
        )}
        allowClear={props.disabled ? false : mergedAllowClear}
        {...props}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    );
  }
);
Textarea.displayName = 'Input.Textarea';

export default Textarea;
