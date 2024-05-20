import { BaseElement } from '../custom-slate';
import { ColorPickerProps, GetProp } from 'antd';

export enum CustomElementType {
  Table = 'table',
  TableRow = 'table-row',
  TableCell = 'table-cell',
  Paragraph = 'paragraph',
  Heading = 'heading',
  Link = 'link',
  Bold = 'bold',
  Code = 'code',
  CheckList = 'check-list',
  OrderedList = 'ordered-list',
}
export enum TextAlign {
  Start = 'start',
  Center = 'center',
  End = 'end',
}
export enum TextHeading {
  H1 = 1,
  H2 = 2,
  H3 = 3,
  H4 = 4,
  H5 = 5,
}
export type NodePropertiesType = keyof Omit<BaseElement, 'children' | 'anchorId'>;
export type Color = GetProp<ColorPickerProps, 'value'>;
