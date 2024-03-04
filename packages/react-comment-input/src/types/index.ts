import { ReactEditor, RenderElementProps } from 'slate-react';
import { HistoryEditor } from 'slate-history';
import { BaseEditor } from 'slate';
export { Node } from 'slate';
export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;
export type FormattedText = { text: string; bold?: true };
export type CustomText = FormattedText;
export enum CustomElementType {
  PARAGRAPH = 'paragraph',
  DEFAULT = 'default',
  CODE = 'code',
  MENTION = 'mention',
}
export type ParagraphElement = {
  type: CustomElementType.PARAGRAPH;
  children: CustomText[];
};
export type MentionElement = {
  type: CustomElementType.MENTION;
  trigger?: string;
  data: any;
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
export type CustomElement =
  | ParagraphElement
  | CodeElement
  | DefaultElement
  | MentionElement
  | {
      type: string;
      children: CustomText[];
      [key: string]: any;
    };
export type RenderCustomElementProps = RenderElementProps & {
  mode?: 'preview';
};
