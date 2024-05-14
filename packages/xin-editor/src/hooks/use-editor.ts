import { withReact } from 'slate-react';
import { createEditor, Descendant, Editor } from 'slate';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { withHistory } from 'slate-history';
import { withCheckList, withInsertBreak } from '@/plugins';
import { CustomElementType } from '@/types';
import withOrderedList from '@/plugins/with-ordered-list';
const useEditor = (): [
  Editor,
  { showPlaceholder: boolean; handlePlaceholder: (val: Descendant[]) => void },
] => {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);
  const editor = useMemo(
    () => withInsertBreak(withCheckList(withReact(withHistory(createEditor())))),
    []
  );
  const handlePlaceholder = (val: Descendant[]) => {
    if (
      val.length === 1 &&
      val[0].type === CustomElementType.Paragraph &&
      val[0]?.children?.[0].text === ''
    ) {
      setShowPlaceholder(true);
    } else {
      setShowPlaceholder(false);
    }
  };
  return [editor, { showPlaceholder, handlePlaceholder }];
};
export default useEditor;
