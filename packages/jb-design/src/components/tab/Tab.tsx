import * as TabsPrimitive from '@radix-ui/react-tabs';
import TabsList from './TabsList';
import TabsTrigger from './TabsTrigger';
import TabsContent from './TabsContent';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
  MouseEvent as ReMouseEvent,
  CSSProperties,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import { cn } from '@/utils';
import { Close } from '@/icons';
import { match, P } from 'ts-pattern';
import './index.css';
import { useSize } from '@wzx-unreal/react-hooks';
import { Space } from 'antd';
import { ScrollArea, Toggle } from '@/components';
export interface TabOptions {
  value: string;
  label?: ReactNode;
  icon?: ReactNode;
  closeIcon?: ReactNode;
  closeable?: boolean;
  disabled?: boolean;
  content?: ReactNode;
  classes?: {
    icon?: string;
    content?: string;
    closeIcon?: string;
  };
  styles?: {
    icon?: CSSProperties;
    content?: CSSProperties;
    closeIcon?: CSSProperties;
  };
  onClose?: (e: ReMouseEvent<HTMLSpanElement, MouseEvent>, value: string) => void;
}
export const Tabs = TabsPrimitive.Root;
type TabRef = ElementRef<typeof TabsPrimitive.Root>;
type BaseTabProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;
export interface TabProps extends BaseTabProps {
  options?: TabOptions[];
  classes?: {
    tab?: string;
    tabItem?: string;
    content?: string;
  };
  styles?: {
    tab?: CSSProperties;
    tabItem?: CSSProperties;
    content?: CSSProperties;
  };
}

const Tab = forwardRef<TabRef, TabProps>((props, ref) => {
  const { options = [], className, classes, styles, ...restProps } = props;
  const listRef = useRef<HTMLDivElement>(null);
  const listSize = useSize(listRef);
  useEffect(() => {
    match(listRef.current).with(P.not(null), (_current) => {
      match(listSize).with(P.not(undefined), (_listSize) => {
        if (_listSize.width >= _current.scrollWidth) {
          console.log('未超出');
        } else {
          console.log('超出');
        }
      });
    });
  }, [listSize]);
  const renderClose = (option: TabOptions) => {
    const { closeable, closeIcon, onClose, classes, styles } = option;
    return match(closeable)
      .with(true, () => {
        return (
          <span
            onMouseDown={(e) => onClose?.(e, option.value)}
            className={cn('jb-tab-icon', 'jb-tab-close-icon', classes?.closeIcon)}
            style={styles?.closeIcon}
          >
            {match(closeIcon)
              .with(undefined, () => <Close />)
              .otherwise((_closeIcon) => closeIcon)}
          </span>
        );
      })
      .otherwise(() => null);
  };
  const actions = useMemo(() => {
    return (
      <Space className={cn('jb-tab-actions')}>
        <Toggle pressed={false}>...</Toggle>
      </Space>
    );
  }, []);
  return (
    <Tabs ref={ref} className={cn(className)} {...restProps}>
      <TabsList ref={listRef} className={cn(classes?.tab)} style={styles?.tab}>
        <ScrollArea
          horizontalScrollBarStyle={{ height: 4 }}
          horizontalPosition={'top'}
          className={cn('jb-tab-scroll-list')}
        >
          {options.map((opt) => {
            return (
              <TabsTrigger
                value={opt.value}
                key={opt.value}
                disabled={opt.disabled}
                className={classes?.tabItem}
                style={styles?.tabItem}
              >
                {opt.icon && (
                  <span className={cn('jb-tab-icon', opt.classes?.icon)} style={opt.styles?.icon}>
                    {opt.icon}
                  </span>
                )}
                <span className={cn(opt.classes?.content)} style={opt.styles?.content}>
                  {opt.label}
                </span>
                {renderClose(opt)}
              </TabsTrigger>
            );
          })}
          {actions}
        </ScrollArea>
      </TabsList>
      {options.map((opt) => {
        return (
          <TabsContent
            className={cn(classes?.content)}
            style={styles?.content}
            value={opt.value}
            key={opt.value}
          >
            {opt.content}
          </TabsContent>
        );
      })}
    </Tabs>
  );
});
export default Tab;
