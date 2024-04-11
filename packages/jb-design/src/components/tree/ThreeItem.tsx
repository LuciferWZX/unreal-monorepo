import { CSSProperties, FC, MouseEvent, ReactNode } from 'react';
import { cn } from '@/utils';
import { CommandItem } from '@/components/command';
import './index.css';
import { ChevronRight, Folder } from '@/icons';
import { match, P } from 'ts-pattern';
import { isBoolean, isFunction, isUndefined } from '@wzx-unreal/react-hooks';
import ChevronDown from '../../icons/chevron-down';
import { Checkbox, CheckboxProps } from '@/components';
import { useBoolean } from 'ahooks';
interface TreeItemProps {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
  icon?: ReactNode | boolean;
  chevron?: boolean | ReactNode | ((isExpand?: boolean) => ReactNode);
  onClickChevron?: (e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, value?: string) => void;
  onDoubleClick?: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, value?: string) => void;
  indent?: number;
  hint?: ReactNode;
  value?: string;
  checkable?: boolean;
  checked?: boolean;
  checkboxProps?: CheckboxProps;
  onCheckedChange?: (checked: boolean) => void;
  isExpand?: boolean;
}
const ThreeItem: FC<TreeItemProps> = (props) => {
  const {
    className,
    isExpand,
    onClickChevron,
    onDoubleClick,
    style,
    checkable,
    checkboxProps,
    value,
    chevron,
    hint,
    children,
    icon,
  } = props;
  const [_checked, { toggle }] = useBoolean(false);
  const mergedChecked = checkboxProps?.checked ?? _checked;
  const mergedCheckedChange = match(checkboxProps?.onCheckedChange)
    .with(undefined, () => () => {
      return toggle;
    })
    .otherwise((_onCheckedChange) => {
      return _onCheckedChange;
    });
  const _classes = cn('jb-group', 'jb-tree-item', className);
  const renderIcon = (
    _icon: ReactNode | boolean | undefined,
    defaultIcon: ReactNode,
    element: (node: ReactNode) => ReactNode
  ) => {
    return match(_icon)
      .with(false, () => null)
      .with(
        P.when((_i) => {
          return !isUndefined(_i) && !isBoolean(_i);
        }),
        (_i) => {
          return element(_i);
        }
      )
      .otherwise(() => {
        return element(defaultIcon);
      });
  };
  return (
    <CommandItem
      // onSelect={(_v) => {
      //   match(checkable).with(true, () => {
      //     mergedCheckedChange(!mergedChecked);
      //   });
      // }}
      onDoubleClick={(e) => onDoubleClick?.(e, value || '')}
      value={value}
      className={_classes}
      style={style}
    >
      <div style={{ paddingLeft: props.indent }} className={'jb-tree-item-children'}>
        <span
          className={'jb-tree-item-switch-icon'}
          onClick={(e) => onClickChevron?.(e, value || '')}
        >
          {renderIcon(
            isFunction(chevron) ? chevron(isExpand) : chevron,
            isExpand ? <ChevronDown /> : <ChevronRight />,
            (node) => node
          )}
        </span>
        <div className={'jb-tree-item-label'}>
          {renderIcon(checkable, <Checkbox value={value} {...checkboxProps} />, (node) => (
            <span className={'jb-tree-item-label-icon'}>{node}</span>
          ))}
          {renderIcon(icon, <Folder />, (node) => (
            <span className={'jb-tree-item-label-icon'}>{node}</span>
          ))}
          <span className={'jb-tree-item-label-text'}>
            <span className={'jb-tree-item-label-text-main'}>{children}</span>
            <span className={'jb-tree-item-label-text-hint'}>{hint}</span>
          </span>
        </div>
      </div>
    </CommandItem>
  );
};
export default ThreeItem;
