import { Editor, Element as SlateElement, Point, Transforms } from 'slate';
import { isCollapsed } from '@/core';
import { CustomElementType } from '@/types';

const withCheckList = (editor: Editor) => {
  const { deleteBackward, insertBreak } = editor;
  editor.deleteBackward = (...args) => {
    const { selection } = editor;
    if (selection && isCollapsed(editor)) {
      // 查找匹配的节点
      const [match] = Editor.nodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === CustomElementType.CheckList,
      });
      // 如果找到匹配的节点
      if (match) {
        const [, path] = match;
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
              n.type === CustomElementType.CheckList,
          });
          // 返回，不执行默认的 deleteBackward 操作
          return;
        }
      }
    }
    // 执行默认的 deleteBackward 操作
    deleteBackward(...args);
  };
  editor.insertBreak = () => {
    // 查找匹配的节点
    const [match] = Editor.nodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === CustomElementType.CheckList,
    });

    if (match) {
      const [, path] = match;
      const text = Editor.string(editor, path);
      if (!text) {
        //说明选项里面没有
        const newProperties: Partial<SlateElement> = {
          type: CustomElementType.Paragraph,
        };
        Transforms.setNodes(editor, newProperties, {
          match: (n) =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            n.type === CustomElementType.CheckList,
        });
        // 返回，不执行默认的 insertBreak 操作
        return;
      }
      //@todo 注意换行的时候是拿的上一条的attribute,以下是组定义的
      // else{
      //   Transforms.insertNodes(editor, { type:CustomElementType.CheckList,children:[{text:""}] });
      //   return;
      // }
    }
    insertBreak();
  };
  return editor;
};
export default withCheckList;
