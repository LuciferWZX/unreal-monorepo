import { Editor } from 'slate';
import { isCollapsed } from '@/core/helper';

/**
 * 获取selection的文本
 * @param editor
 */
export const getSelectionText = (editor: Editor) => {
  const { selection } = editor;
  if (!selection || isCollapsed(editor)) {
    return '';
  }
  return Editor.string(editor, selection);
};
