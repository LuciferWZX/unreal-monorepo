import { Descendant, Editor, Element as SlateElement, Location as SlateLocation } from 'slate';
import { CustomElementType } from '../types';
import { CustomElement } from '../../custom-slate';
/**
 * 生成默认的content
 */
export declare function getDefaultContent(): Descendant[];
/**
 *当点击一些节点的时候光标位置会失效
 * @param editor
 * @param element
 */
export declare function fixedCursorWhenClickNode(editor: Editor, element: CustomElement): void;
/**
 * 换行的时候使用setNodes这个方式的话一些props还在上面，这边不需要
 * @param newProperties
 */
export declare function getNodesWithInitialProps(newProperties: Partial<SlateElement>): {
    heading: any;
    textAlign: any;
    children?: import("../../custom-slate").FormattedText[] | undefined;
    type?: CustomElementType.Paragraph | undefined;
} | {
    heading: any;
    textAlign: any;
    children?: import("../../custom-slate").FormattedText[] | undefined;
    type?: CustomElementType.Heading | undefined;
    level?: 1 | 2 | 3 | 4 | 5 | undefined;
} | {
    heading: any;
    textAlign: any;
    children?: import("../../custom-slate").FormattedText[] | undefined;
    type?: CustomElementType.Code | undefined;
} | {
    heading: any;
    textAlign: any;
    children?: import("../../custom-slate").FormattedText[] | undefined;
    type?: CustomElementType.CheckList | undefined;
    disabled?: boolean | undefined;
    checked?: boolean | undefined;
} | {
    heading: any;
    textAlign: any;
    children?: import("../../custom-slate").FormattedText[] | undefined;
    type?: CustomElementType.OrderedList | undefined;
    index?: number | undefined;
} | {
    heading: any;
    textAlign: any;
    children?: import("../../custom-slate").FormattedText[] | undefined;
    type?: CustomElementType.Link | undefined;
    href?: string | undefined;
    view?: "link" | "title" | "card" | undefined;
    disabled?: boolean | undefined;
};
/**
 * 更新下一个有序列表的节点
 * @param editor
 * @param curIndex
 * @param at
 */
export declare const updateNextOrderedIndex: (editor: Editor, curIndex: number, at: SlateLocation) => void;
export declare const insertZeroWidthSpace: (editor: Editor) => void;
/**
 * 表示范围是折叠状态，即范围内没有实际的文本内容。这通常意味着光标处于特定位置，而不是选择了一段文本
 * @param editor
 */
export declare function isCollapsed(editor: Editor): boolean;
export declare function wrapLink(editor: Editor, href: string, selection?: SlateLocation): void;
