import { FC, HTMLAttributes, ReactNode, MouseEvent, useState, KeyboardEventHandler } from 'react';
import './index.css';
import TreeContainer from '@/components/tree/TreeContainer';
import ThreeItem from '@/components/tree/ThreeItem';
import { match, P } from 'ts-pattern';
import { isUndefined } from '@wzx-unreal/react-hooks';
import SubTreeContainer from '@/components/tree/SubTreeContainer';
import { Checkbox } from '@/components';
import { CheckedState } from '@radix-ui/react-checkbox';
import useTreeCheckbox from '@/components/tree/useTreeCheckbox';
export interface BaseTreeData extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'children'> {
  title: string | ReactNode;
  key: string;
  hint?: string | ReactNode;
  icon?: boolean | ReactNode;
  checkable?: boolean;
}
export interface TreeNodeData extends BaseTreeData {
  chevron?: boolean | ReactNode | ((isExpand?: boolean) => ReactNode);
  children?: TreeData[];
}
export interface TreeLeafData extends BaseTreeData {
  isLeaf?: boolean;
}
export type TreeData = TreeNodeData | TreeLeafData;
interface TreeProps {
  indent?: number;
  height?: number;
  width?: number;
  defaultExpandKeys?: string[];
  onExpandKeysChanges?: (keys: string[]) => void;
  defaultCheckedValues?: string[];
  checkedValues?: string[];
  onCheckedValuesChanges?: (values: string[]) => void;
  expandKeys?: string[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  checkable?: boolean;
}
const Tree: FC<TreeProps> = (props) => {
  const {
    indent = 20,
    value,
    onValueChange,
    defaultValue,
    expandKeys,
    onExpandKeysChanges,
    defaultCheckedValues,
    onCheckedValuesChanges,
    checkedValues,
    defaultExpandKeys,
    height,
    checkable,
    width,
  } = props;
  const treeData: TreeData[] = [
    {
      title: '0-0',
      key: '0-0',
      hint: '0-0 hint',
      chevron: (isExpand) => {
        return (isExpand ?? 'undefined').toString();
      },
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
            { title: '0-0-0-1', key: '0-0-0-1', icon: false },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          chevron: false,
          icon: false,
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      icon: false,
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      icon: false,
      title: '0-2',
      key: '0-2',
    },
  ];
  const [_expandKeys, setExpandKeys] = useState<string[]>(defaultExpandKeys ?? []);
  const [_value, setValue] = useState<string | undefined>(defaultValue ?? '');
  const [_checkedKeys, setCheckedKeys] = useState<string[]>(defaultCheckedValues ?? []);
  const mergedCheckedKeys = checkedValues ?? _checkedKeys;
  const mergedCheckedChange = onCheckedValuesChanges ?? setCheckedKeys;
  const mergedValue = value ?? _value;
  const mergedExpandKeys = expandKeys ?? _expandKeys;
  const { findPath } = useTreeCheckbox(treeData, mergedCheckedKeys);

  const mergedOnValueChange = onValueChange ?? setValue;
  const handleValueChange = (value: string) => {
    mergedOnValueChange(value);
  };

  const mergedOnExpandKeysChanges = onExpandKeysChanges ?? setExpandKeys;
  const handleExpandKey = (key?: string) => {
    match(key)
      .with(undefined, () => {
        throw Error('key is undefined');
      })
      .with(
        P.when((k) => mergedExpandKeys.includes(k)),
        (k) => {
          mergedOnExpandKeysChanges(mergedExpandKeys.filter((item) => item !== k));
        }
      )
      .with(
        P.when((k) => !mergedExpandKeys.includes(k)),
        (k) => {
          mergedOnExpandKeysChanges([...mergedExpandKeys, k]);
        }
      );
  };
  const handleOnKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    match(e.code)
      .with('Enter', () => {
        e.preventDefault();
        handleExpandKey(mergedValue);
      })
      .with('Space', () => {
        e.preventDefault();
      });
  };
  const handleExpand = (e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, key?: string) => {
    e.stopPropagation();
    handleExpandKey(key);
  };
  const handleDoubleClick = (
    _e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    key?: string
  ) => {
    handleExpandKey(key);
  };
  const getCheckedStatus = (_children: TreeData[]): 'indeterminate' | 'checked' | 'unchecked' => {
    const validChildren = _children.filter((_c) => _c.checkable ?? checkable);
    const status = validChildren.map((_c) => {
      return match(_c)
        .with({ children: P.not(undefined) }, (_, _v) => {
          return getCheckedStatus(_v.children);
        })
        .otherwise((_v) => {
          if (mergedCheckedKeys.includes(_v.key)) {
            return 'checked';
          }
          return 'unchecked';
        });
    });
    return match<
      ('indeterminate' | 'checked' | 'unchecked')[],
      'indeterminate' | 'checked' | 'unchecked'
    >(status)
      .with(P.array('checked'), () => {
        return 'checked';
      })
      .with(P.array('unchecked'), () => {
        return 'unchecked';
      })
      .otherwise(() => {
        return 'indeterminate';
      });
  };
  const renderTree = (_treeData: TreeData[], _indent: number = 0) => {
    return _treeData.map((item) => {
      const mergedCheckable = item.checkable ?? checkable;
      return match(item)
        .with({ children: P.not(undefined) }, (_, value) => {
          const isExpand = mergedExpandKeys.includes(value.key);
          const checkedStatus = getCheckedStatus(
            value.children.filter((_c) => _c.checkable ?? mergedCheckable)
          );
          console.log('checkedStatus', value.key, checkedStatus);
          return (
            <SubTreeContainer key={value.key}>
              <ThreeItem
                value={value.key}
                chevron={value.chevron}
                isExpand={isExpand}
                checkable={mergedCheckable}
                onClickChevron={handleExpand}
                onDoubleClick={handleDoubleClick}
                checkboxProps={{
                  checked: checkedStatus !== 'unchecked',
                  skipGroup: true,
                  onCheckedChange(checked: CheckedState) {
                    const paths = findPath(treeData, value.key);
                    console.log(111111, paths);
                  },
                  indeterminate: checkedStatus === 'indeterminate',
                }}
                icon={value.icon}
                hint={value.hint}
                key={value.key}
                indent={_indent}
              >
                {value.title}
              </ThreeItem>
              {isExpand && renderTree(value.children, _indent + indent)}
            </SubTreeContainer>
          );
        })
        .otherwise(() => {
          return (
            <ThreeItem
              checkable={mergedCheckable}
              value={item.key}
              icon={item.icon}
              hint={item.hint}
              key={item.key}
              chevron={false}
              indent={_indent}
              // checkboxProps={{
              //   onCheckedChange(checked: CheckedState) {
              //     if (parentData) {
              //       match(checked)
              //         .with(true, () => {
              //           if (!mergedCheckedKeys.includes(parentData.data!.key)) {
              //             mergedCheckedChange([
              //               ...mergedCheckedKeys,
              //               parentData.data!.key,
              //               item.key,
              //             ]);
              //           }
              //         })
              //         .with(false, () => {
              //           console.log(222222222, parentData.checkboxStatus);
              //           if (parentData.checkboxStatus === 'unchecked') {
              //             mergedCheckedChange(
              //               mergedCheckedKeys.filter(
              //                 (_item) => _item !== parentData.data!.key || _item !== item.key
              //               )
              //             );
              //           }
              //         });
              //     }
              //   },
              // }}
            >
              {item.title}
            </ThreeItem>
          );
        });
    });
  };

  return (
    <TreeContainer
      value={mergedValue}
      onValueChange={handleValueChange}
      onKeyDown={handleOnKeyDown}
      height={height}
      width={width}
    >
      <Checkbox.Group customLayout={true} value={mergedCheckedKeys} onChange={mergedCheckedChange}>
        {renderTree(treeData)}
      </Checkbox.Group>
    </TreeContainer>
  );
};
export default Tree;
