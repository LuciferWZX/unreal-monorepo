import { Editor } from 'slate';
import { SEL_CELLS } from '@/core/weak-maps';

// eslint-disable-next-line @typescript-eslint/ban-types
export function removeSelection(editor: Editor, setSelCells: Function) {
  setSelCells(() => {
    SEL_CELLS.set(editor, []);
    return [];
  });
}
