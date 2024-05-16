import { Editor, Element as SlateElement, NodeEntry, Transforms } from 'slate';
import { CustomElement } from '../../../custom-slate';
import { CustomElementType } from '@/types';

export function normalizeLink(editor: Editor, entry: NodeEntry) {
  const [node, path] = entry;
  const { type, children } = node as CustomElement;
  if (SlateElement.isElement(node) && type === CustomElementType.Link) {
    const textNode = children.find((item) => typeof item.text === 'string');
    const isTextEmpty = textNode && ['', '%EF%BB%BF'].includes(encodeURIComponent(textNode.text));
    if (isTextEmpty) {
      const hasWrappedElement =
        isTextEmpty && children.find((item) => typeof item.type !== 'undefined');
      if (hasWrappedElement) {
        Transforms.unwrapNodes(editor, { at: path });
        return true;
      }
      Transforms.delete(editor, { at: [...path] });
      return true;
    }
    const componentsOk = [undefined];

    if (!isNodeChildrenIsTargetType(children as any, [componentsOk])) {
      delChildrenNotAllowComponent(editor, children, componentsOk, path);
      return true;
    }
  }
  return false;
}
export function isNodeChildrenIsTargetType(
  children: CustomElement[],
  type?: string | any[],
  index?: number
): any {
  if (type) {
    return (
      Array.isArray(children) &&
      children.length &&
      children.every((item: any) => {
        if (typeof type === 'string') {
          return item.type === type;
        } else if (Array.isArray(type)) {
          const t = index || 0;
          if (typeof type[t] === 'string' || type[t] === undefined) {
            const result = type[t] === item.type;
            if (result && type.length === t + 1) {
              return true;
            } else if (result && type.length < t + 1) {
              return isNodeChildrenIsTargetType(item.children, type, t + 1);
            }

            return false;
          } else if (Array.isArray(type[t])) {
            const result = type[t].includes(item.type);
            if (result && type.length === t + 1) {
              return true;
            } else if (result && type.length < t + 1) {
              return isNodeChildrenIsTargetType(item.children, type, t + 1);
            }

            return false;
          } else {
            console.error('isNodeChildrenIsTargetType err', children, type, index);

            return false;
          }
        }
      })
    );
  }
  return Array.isArray(children) && children.length;
}
export function delChildrenNotAllowComponent(
  editor: Editor,
  children: any[],
  componentsOk: (string | undefined)[],
  path: number[],
  defaultChildren?: any
) {
  let count = children.length;
  for (let i = children.length - 1; i >= 0; i--) {
    const el = children[i];
    if (!componentsOk.includes(el?.type)) {
      const tPath = path.concat([i]);
      console.log('delChildrenNotAllowComponent', el, children, tPath);

      if (Editor.hasPath(editor, tPath)) {
        if (count === 1) {
          const dNode = defaultChildren || { text: getNodeString(children) };
          Transforms.insertNodes(editor, dNode, { at: calcNextPath(tPath) });
        }
        Transforms.delete(editor, { at: tPath });
        count--;
      }
    }
  }
}
function calcNextPath(path: number[]) {
  return [...path.slice(0, -1), path[path.length - 1] + 1];
}

export function getNodeString(node: Node & any): string {
  if (node?.type === 'text') {
    return typeof node.value === 'string' ? (node.value as string) : '';
  } else {
    if (Array.isArray(node)) {
      return node.map(getNodeString).join('');
    } else if (Array.isArray(node?.children)) {
      return node.children?.map(getNodeString).join('');
    } else {
      return '';
    }
  }
}
