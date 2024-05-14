import {
  Descendant,
  Editor,
  Element,
  Range,
  Transforms,
  Node,
  Element as SlateElement,
} from 'slate';
import { CustomElementType, NodePropertiesType } from '@/types';
import { ReactEditor } from 'slate-react';
import { match as tsMatch, P } from 'ts-pattern';
import { BaseElement, CheckListElement, CustomElement, FormattedText } from '../../custom-slate';

/**
 * 生成默认的content
 */
export function getDefaultContent(): Descendant[] {
  return [
    {
      type: CustomElementType.Paragraph,
      children: [{ text: '' }],
    },
  ];
}

/**
 *当点击一些节点的时候光标位置会失效
 * @param editor
 * @param element
 */
export function fixedCursorWhenClickNode(editor: Editor, element: CustomElement) {
  const { selection } = editor;
  const [nodeIndex] = ReactEditor.findPath(editor, element);
  const [curNode] = Editor.nodes(editor, {
    match: (n) => Element.isElement(n) && Editor.isBlock(editor, n as CustomElement),
  });
  if (curNode[0] !== element) {
    const offset = selection ? selection.focus.offset : 0;
    Transforms.select(editor, {
      focus: {
        offset: offset,
        path: [nodeIndex, 0],
      },
      anchor: {
        offset: offset,
        path: [nodeIndex, 0],
      },
    });
  }
  ReactEditor.blur(editor);
  ReactEditor.focus(editor);
}

/**
 * 换行的时候使用setNodes这个方式的话一些props还在上面，这边不需要
 * @param newProperties
 */
export function getNodesWithInitialProps(newProperties: Partial<SlateElement>) {
  const props: Record<NodePropertiesType, any> = {
    textAlign: undefined,
    heading: undefined,
  };
  return {
    ...newProperties,
    ...props,
  };
}
/**
 * 表示范围是折叠状态，即范围内没有实际的文本内容。这通常意味着光标处于特定位置，而不是选择了一段文本
 * @param editor
 */
export function isCollapsed(editor: Editor) {
  const { selection } = editor;
  return !!(selection && Range.isCollapsed(selection));
}
