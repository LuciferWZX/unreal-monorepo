import { Descendant, Editor, Node as SlateNode, Element as SlateElement, Location as SlateLocation } from 'slate';
import { CustomElementType } from '../types';
import { CustomElement, LinkElement } from '../../custom-slate';
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
    textAlign: any;
    heading: any;
    anchorId?: string | undefined;
    children?: import("../../custom-slate").FormattedText[] | undefined;
    type?: CustomElementType.Paragraph | undefined;
} | {
    textAlign: any;
    heading: any;
    anchorId?: string | undefined;
    children?: import("../../custom-slate").FormattedText[] | undefined;
    type?: CustomElementType.Heading | undefined;
    level?: 1 | 2 | 3 | 4 | 5 | undefined;
} | {
    textAlign: any;
    heading: any;
    anchorId?: string | undefined;
    children?: import("../../custom-slate").FormattedText[] | undefined;
    type?: CustomElementType.Code | undefined;
} | {
    textAlign: any;
    heading: any;
    anchorId?: string | undefined;
    children?: import("../../custom-slate").FormattedText[] | undefined;
    type?: CustomElementType.CheckList | undefined;
    disabled?: boolean | undefined;
    checked?: boolean | undefined;
} | {
    textAlign: any;
    heading: any;
    anchorId?: string | undefined;
    children?: import("../../custom-slate").FormattedText[] | undefined;
    type?: CustomElementType.OrderedList | undefined;
    index?: number | undefined;
} | {
    textAlign: any;
    heading: any;
    anchorId?: string | undefined;
    children?: import("../../custom-slate").FormattedText[] | undefined;
    type?: CustomElementType.Link | undefined;
    href?: string | undefined;
    view?: "href" | "title" | "card" | undefined;
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
export declare function wrapLink(editor: Editor, href: string, title: string | undefined, selection: SlateLocation | null): void;
/**
 * 移除Link
 * @param editor
 * @param node
 */
export declare function delLinks(editor: Editor, node: SlateNode): void;
/**
 * 设置连接的值
 * @param editor
 * @param node
 * @param view
 */
export declare function setLinks(editor: Editor, node: LinkElement, view: 'href' | 'title' | 'card' | undefined): void;
