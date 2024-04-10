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

  function findKeys(_treeData: TreeData[], key: string): string[] | null {
    const stack: TreeData[] = [..._treeData];
    const keys: string[] = [];

    while (stack.length > 0) {
      const node = stack.pop();
      if (node) {
        if (node.key === key) {
          keys.push(node!.key);
          stack.push(...getChildren('children' in node ? node.children : []));
          break;
        }

        if ('children' in node) {
          stack.push(...(node.children ?? []));
        }
      }
    }

    return keys.length > 0 ? keys : null;
  }

  function getChildren(children?: TreeData[]): TreeData[] {
    if (!children) {
      return [];
    }

    const result: TreeData[] = [];

    for (const child of children) {
      result.push(child);
      if ('children' in child) {
        result.push(...getChildren(child.children));
      }
    }

    return result;
  }

  return {
    findHierarchy: findHierarchy,
    findPath: findKeys,
  };
}
export default useTreeCheckbox;
