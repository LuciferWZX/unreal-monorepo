import { Editor, Transforms, Element } from 'slate';
import { match } from 'ts-pattern';
import { CustomElementType } from '@/types';
import { CheckListElement, CustomElement } from '../../custom-slate';

const EditorCommand = {
  isBoldMarkActive(editor: Editor) {
    const marks = Editor.marks(editor);
    return match(marks)
      .with({ bold: true }, () => {
        return true;
      })
      .otherwise(() => {
        return false;
      });
  },
  toggleBoldMark(editor: Editor) {
    const isActive = EditorCommand.isBoldMarkActive(editor);
    match(isActive)
      .with(true, () => {
        Editor.removeMark(editor, 'bold');
      })
      .otherwise(() => {
        Editor.addMark(editor, 'bold', true);
      });
  },

  isCheckListNode(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as CheckListElement).type === CustomElementType.CheckList,
    });
    return !!match;
  },
  toggleCheckListNode(editor: Editor) {
    const isCheckList = EditorCommand.isCheckListNode(editor);
    Transforms.setNodes(
      editor,
      { type: isCheckList ? CustomElementType.Paragraph : CustomElementType.CheckList },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n as CustomElement) }
    );
  },
};
export default EditorCommand;
