// This example is for an Editor with `ReactEditor` and `HistoryEditor`
import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';
import { CustomElementType, Heading, TextAlign, TextHeading, TextSize } from '@/types';
declare module '*.svg';
export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;
export type BaseText = { type?: CustomElementType; children?: FormattedText[]; text: string };
export type FormattedText = BaseText & {
  bold?: boolean;
  italic?: boolean;
  highlight?: boolean;
  underline?: boolean;
  anchorId?: string;
};
export type CustomText = FormattedText;
export type BaseElement = {
  textAlign?: TextAlign;
  heading?: TextHeading;
  anchorId?: string;
  children: CustomText[];
};

//段落
export type ParagraphElement = BaseElement & {
  type: CustomElementType.Paragraph;
};
//超链接
export type LinkElement = BaseElement & {
  type: CustomElementType.Link;
  href: string;
  view?: 'title' | 'href' | 'card';
  disabled?: boolean;
};
//代码块
export type CodeElement = BaseElement & {
  type: CustomElementType.Code;
};
//checkList
export type CheckListElement = BaseElement & {
  type: CustomElementType.CheckList;
  disabled?: boolean;
  checked: boolean;
};
//有序列表
export type OrderedListElement = BaseElement & {
  type: CustomElementType.OrderedList;
  index: number;
};

//Heading
export type HeadingElement = BaseElement & {
  type: CustomElementType.Heading;
  level: 1 | 2 | 3 | 4 | 5;
};

export type CustomElement =
  | ParagraphElement
  | HeadingElement
  | CodeElement
  | CheckListElement
  | OrderedListElement
  | LinkElement;

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
