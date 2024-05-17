import { withReact } from 'slate-react';
import { createEditor, Descendant, Editor } from 'slate';
import { useMemo, useState } from 'react';
import { withHistory } from 'slate-history';
import {
  withCheckList,
  withInline,
  withInsertBreak,
  withLink,
  withNormalizeNode,
  withOrderedList,
} from '@/plugins';
import { getDefaultContent } from '@/core';
import { consumePlugins } from '@/core/consumePlugins';

const useEditor = (): [
  Editor,
  { showPlaceholder: boolean; handlePlaceholder: (val: Descendant[]) => void },
] => {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);

  const slateEditor = useMemo(() => {
    const plugins = [
      withNormalizeNode,
      withInline,
      withInsertBreak,
      withLink,
      withOrderedList,
      withCheckList,
      withReact,
      withHistory,
    ].reverse();
    return consumePlugins(createEditor(), plugins);
  }, []);
  const editor = useMemo(() => slateEditor, []);
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
