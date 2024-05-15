import {
  Editor,
  Element as SlateElement,
  Location as SlateLocation,
  Point,
  Transforms,
} from 'slate';
import { getNodesWithInitialProps, isCollapsed, updateNextOrderedIndex } from '@/core';
import { CustomElementType } from '@/types';
import EditorCommand from '@/core/command';
import { match } from 'ts-pattern';
import { CustomElement, OrderedListElement } from '../../custom-slate';
import { HistoryEditor } from 'slate-history';

const withOrderedList = (editor: Editor) => {
  const { deleteBackward, insertBreak } = editor;
  editor.deleteBackward = (...args) => {
    const { selection } = editor;
    if (selection && isCollapsed(editor)) {
      // 查找匹配的节点
      const [matchEntry] = Editor.nodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === CustomElementType.OrderedList,
      });
      // 如果找到匹配的节点
      if (matchEntry) {
        const [, path] = matchEntry;
        const start = Editor.start(editor, path);
        // 检查选区的锚点是否与节点的起始位置相同
        if (Point.equals(selection.anchor, start)) {
          const newProperties: Partial<SlateElement> = {
            type: CustomElementType.Paragraph,
          };
          Transforms.setNodes(editor, newProperties, {
            match: (n) =>
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              n.type === CustomElementType.OrderedList,
          });
          // 返回，不执行默认的 deleteBackward 操作
          return;
        }
      }
    }
    deleteBackward(...args);
  };
  editor.insertBreak = () => {
    // 查找匹配的节点
    const [orderNodeEntry] = Editor.nodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === CustomElementType.OrderedList,
    });
    if (orderNodeEntry) {
      const [, path] = orderNodeEntry;
      const text = Editor.string(editor, path);
      return match(text)
        .with('', () => {
          //说明选项里面没有
          const newProperties: Partial<SlateElement> = getNodesWithInitialProps({
            type: CustomElementType.Paragraph,
          });
          EditorCommand.restoreNormal(editor);
          Transforms.setNodes(editor, newProperties, {
            match: (n) =>
              !Editor.isEditor(n) &&
              SlateElement.isElement(n) &&
              n.type === CustomElementType.OrderedList,
          });
          // 返回，不执行默认的 insertBreak 操作
          return;
        })
        .otherwise(() => {
          //插入一行
          insertBreak();
          let defaultIndex = 1;
          const { selection } = editor;
          if (!selection) {
            throw Error('selection is undefined');
          }

          const nodeEntry = Editor.node(editor, selection);
          const preNodeEntry = Editor.previous<OrderedListElement>(editor, {
            at: nodeEntry[1],
            match: (n) => SlateElement.isElement(n) && n.type === CustomElementType.OrderedList,
          });
          if (preNodeEntry) {
            defaultIndex = preNodeEntry[0].index + 1;
          }
          Transforms.setNodes(
            editor,
            {
              index: defaultIndex,
            },
            {
              match: (n) =>
                !Editor.isEditor(n) &&
                SlateElement.isElement(n) &&
                n.type === CustomElementType.OrderedList,
            }
          );
          const { selection: _selection } = editor;
          if (!_selection) {
            throw Error('selection is undefined');
          }
          const curNodeEntry = Editor.node(editor, _selection);
          updateNextOrderedIndex(editor, defaultIndex, curNodeEntry[1]);
          return;
        });
    }
    insertBreak();
  };
  return editor;
};
export default withOrderedList;
