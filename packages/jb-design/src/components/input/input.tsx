import {
  CSSProperties,
  forwardRef,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';
import './index.css';
import { ExpandOutline, FolderFull } from '@/icons';
import { cn } from '@/utils';
import { Space } from 'antd';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  suffix?: ReactNode | SuffixType[];
  block?: boolean;
}
export interface SuffixType {
  type?: 'folder' | 'expand';
  key: string;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, suffix, style, block, ...restProps } = props;
  const classes = cn(
    'jb-input',
    'jb-input-base-colors',
    { 'jb-input-box': !!suffix, 'jb-input-block': block },
    className
  );

  const baseInput = (_classes?: string, _style?: CSSProperties) => (
    <input style={_style} className={_classes} {...restProps} ref={ref} />
  );
  if (suffix) {
    const renderSuffix = (_suffix: ReactNode | SuffixType[]) => {
      if (Array.isArray(_suffix)) {
        return (
          <Space size={8}>
            {_suffix.map((item) => {
              const mergedDisabled = item.disabled ?? props.disabled;
              let child = item.children;
              if (!child) {
                switch (item.type) {
                  case 'folder': {
                    child = <FolderFull />;
                    break;
                  }
                  case 'expand': {
                    child = <ExpandOutline />;
                    break;
                  }
                }
              }
              const suffixIconClasses = cn('jb-suffix-icon', item.className);
              return (
                <span
                  key={item.key}
                  aria-disabled={mergedDisabled}
                  onClick={item.disabled ? undefined : item?.onClick}
                  className={suffixIconClasses}
                >
                  {child}
                </span>
              );
            })}
          </Space>
        );
      }
      return _suffix;
    };
    return (
      <div style={style} className={classes} aria-invalid={props['aria-invalid']}>
        {baseInput(cn('jb-input-base-colors', 'jb-input-in-box'))}
        {renderSuffix(suffix)}
      </div>
    );
  }
  return baseInput(classes, style);
});
export default Input;
