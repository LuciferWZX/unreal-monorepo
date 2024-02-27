import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';
import { BaseEditor } from 'slate';

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;
export type FormattedText = { text: string; bold?: true };

export type CustomText = FormattedText;
export enum CustomElementType {
  PARAGRAPH = 'paragraph',
  DEFAULT = 'default',
  CODE = 'code',
}
export type ParagraphElement = {
  type: CustomElementType.PARAGRAPH;
  children: CustomText[];
};
export type DefaultElement = {
  type: CustomElementType.DEFAULT;
  children: CustomText[];
};
export type CodeElement = {
  type: CustomElementType.CODE;
  children: CustomText[];
};
export type CustomElement = ParagraphElement | CodeElement | DefaultElement;
