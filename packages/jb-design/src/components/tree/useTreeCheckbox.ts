import { TreeData } from './Tree';
import { match, P } from 'ts-pattern';
import { useEffect } from 'react';

export function useTreeCheckbox(treeData: TreeData[], checkedValues: string[]) {
  const findHierarchy = (_treeData: TreeData[], key: string): string[] | null => {
    for (let i = 0; i < _treeData.length; i++) {
      const node = _treeData[i];
      if (node.key === key) {
        return [node.key];
      }
      if ('children' in node) {
        const result = findHierarchy(node.children ?? [], key);
        if (result) {
          return [node.key, ...result];
        }
      }
    }
    return null;
  };

  const getChildrenKeys = (_treeData: TreeData[], key: string) => {
    let results: string[] = [];
    const target = findTarget(_treeData, key);
    if (target) {
      results = results.concat(key);
      match(target).with({ children: P.not(undefined) }, (_, _value) => {
        const childrenKeys = findTargetChildrenKeys(_value.children);
        results = results.concat(childrenKeys);
      });
    }
    return results;
  };
  const findTarget = (_treeData: TreeData[], key: string): TreeData | undefined => {
    const target = _treeData.find((_value) => _value.key === key);

    if (target) {
      return target;
    }
    const withChildren = _treeData.filter((_v) => {
      return match(_v)
        .with({ children: P.not(undefined) }, (_, _v) => {
          return true;
        })
        .otherwise(() => {
          return false;
        });
    });

    /**
     * 先检查children是否存在
     */
    return match(withChildren)
      .with(P.array({ key: key }), (_, _cv) => {
        return _cv.find((_c) => _c.key === key);
      })
      .otherwise((_value) => {
        let _target: TreeData | undefined = undefined;
        for (let i = 0; i < _value.length; i++) {
          _target = match(_value[i])
            .with({ key: key }, (_, _cv) => {
              return _cv;
            })
            .with({ children: P.not(undefined) }, (_, _cv) => {
              return findTarget(_cv.children, key);
            })
            .otherwise((_value) => {
              return undefined;
            });
          if (_target) {
            break;
          }
        }
        return _target;
      });
  };
  const findTargetChildrenKeys = (_treeData: TreeData[]) => {
    let results: string[] = [];
    for (let i = 0; i < _treeData.length; i++) {
      match(_treeData[i])
        .with({ children: P.not(undefined) }, (_, _value) => {
          const keys = findTargetChildrenKeys(_value.children);
          results = results.concat(keys);
        })
        .otherwise((_value) => {
          results = results.concat(_value.key);
        });
    }
    return Array.from(new Set(results));
  };

  return {
    findHierarchy: findHierarchy,
    getChildrenKeys: getChildrenKeys,
  };
}
export default useTreeCheckbox;
