import { Descendant, Editor } from 'slate';
/**
 * 生成默认的content
 */
export declare function getDefaultContent(): Descendant[];
/**
 * 表示范围是折叠状态，即范围内没有实际的文本内容。这通常意味着光标处于特定位置，而不是选择了一段文本
 * @param editor
 */
export declare function isCollapsed(editor: Editor): boolean;
