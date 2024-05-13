import { Editor, Element as SlateElement, Point, Transforms } from 'slate';
import { isCollapsed } from '@/core';
import { CustomElementType } from '@/types';

const withOrderedList = (editor: Editor) => {
  const { deleteBackward, insertBreak } = editor;
  editor.deleteBackward = (...args) => {
    deleteBackward(...args);
  };
  editor.insertBreak = () => {
    insertBreak();
  };
  return editor;
};
export default withOrderedList;
