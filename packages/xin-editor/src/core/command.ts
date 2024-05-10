import { Editor } from 'slate';
import { match } from 'ts-pattern';

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
};
export default EditorCommand;
