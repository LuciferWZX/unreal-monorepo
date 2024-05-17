import { Editor } from 'slate';
import { CustomElementType } from '@/types';
import isUrl from '@/core/is-url';
import { wrapLink } from '@/core';

const withLink = (editor: Editor) => {
  const { isInline, insertText, insertData, setFragmentData } = editor;
  editor.isInline = (element) => {
    return element.type === CustomElementType.Link ? true : isInline(element);
  };
  editor.insertText = (...args) => {
    const text = args[0];
    console.info('[with-link insertText *********]', text);
    if (text && isUrl(text)) {
      wrapLink(editor, text, text, editor.selection);
    } else {
      insertText(...args);
    }
  };
  editor.insertData = (data) => {
    const text = data.getData('text/plain');
    console.info('[with-link insertData *********]');
    if (text && isUrl(text)) {
      wrapLink(editor, text, text, editor.selection);
    } else {
      insertData(data);
    }
  };
  editor.setFragmentData = (data) => {
    console.log('[with-link setFragmentData *********]', data);
    setFragmentData(data);
  };
  return editor;
};
export default withLink;
