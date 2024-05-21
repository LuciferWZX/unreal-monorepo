import {
  Editor,
  Range as SlateRange,
  Element as SlateElement,
  Node as SlateNode,
  Transforms,
} from 'slate';
import isHotkey from 'is-hotkey';
import { CustomElementType } from '@/types';

const onKeyDownTable = (e: React.KeyboardEvent, editor: Editor) => {
  if (isHotkey('mod+c', e)) {
    e.preventDefault();
    e.stopPropagation();
    const { selection } = editor;
    if (selection && SlateRange.isRange(selection)) {
      const nodes = SlateNode.fragment(editor, selection);
      const [start, end] = Editor.edges(editor, selection);
      const range = {
        focus: start,
        anchor: end,
      };
      Transforms.select(editor, range);
      console.log(123, nodes);
      document.execCommand('copy');
      Transforms.deselect(editor);
    }
    console.log('复制');
  }
};
export default onKeyDownTable;
