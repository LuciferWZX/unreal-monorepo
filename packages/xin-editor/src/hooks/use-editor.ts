import { withReact } from 'slate-react';
import { createEditor, Descendant, Editor } from 'slate';
import { useMemo, useState } from 'react';
import { withHistory } from 'slate-history';
import {
  withCheckList,
  withInsertBreak,
  withLink,
  withNormalizeNode,
  withOrderedList,
} from '@/plugins';
import { getDefaultContent } from '@/core';
const useEditor = (): [
  Editor,
  { showPlaceholder: boolean; handlePlaceholder: (val: Descendant[]) => void },
] => {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);
  const editor = useMemo(
    () =>
      withInsertBreak(
        withNormalizeNode(
          withLink(withOrderedList(withCheckList(withReact(withHistory(createEditor())))))
        )
      ),
    []
  );
  const handlePlaceholder = (val: Descendant[]) => {
    if (val.length === 1 && JSON.stringify(val) === JSON.stringify(getDefaultContent())) {
      setShowPlaceholder(true);
    } else {
      setShowPlaceholder(false);
    }
  };
  return [editor, { showPlaceholder, handlePlaceholder }];
};
export default useEditor;
