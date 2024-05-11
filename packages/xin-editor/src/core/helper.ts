import { Descendant, Editor, Range } from 'slate';
import { CustomElementType } from '@/types';

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
 * 表示范围是折叠状态，即范围内没有实际的文本内容。这通常意味着光标处于特定位置，而不是选择了一段文本
 * @param editor
 */
export function isCollapsed(editor: Editor) {
  const { selection } = editor;
  return !!(selection && Range.isCollapsed(selection));
}
