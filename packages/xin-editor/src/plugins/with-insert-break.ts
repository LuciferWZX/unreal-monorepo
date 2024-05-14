import { Editor, Element as SlateElement, Transforms } from 'slate';
import { CustomElementType } from '@/types';
import { ParagraphElement } from '../../custom-slate';

const withInsertBreak = (editor: Editor) => {
  const { insertBreak } = editor;
  editor.insertBreak = () => {
    // 匹配带有Heading的段落换行，这边段落换行不需要和上次一样的
    const [match] = Editor.nodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.heading !== undefined &&
        n.type === CustomElementType.Paragraph,
    });
    if (match) {
      //说明选项里面没有
      const newNode: ParagraphElement = {
        type: CustomElementType.Paragraph,
        children: [{ text: '' }],
      };
      Transforms.insertNodes(editor, newNode);
      return;
    }
    insertBreak();
  };
  return editor;
};
export default withInsertBreak;
