import { Editor, NodeEntry, Element as SlateElement } from 'slate';
import { CustomElement } from '../../../custom-slate';
import { CustomElementType } from '@/types';

const normalizeTableCell = (editor: Editor, entry: NodeEntry) => {
  const [node, path] = entry as NodeEntry<CustomElement>;

  const { type, children } = node;
  if (SlateElement.isElement(node) && type === CustomElementType.TableCell) {
    const componentOk = [CustomElementType.Paragraph];
    return false;
  }
  return false;
};
export default normalizeTableCell;
