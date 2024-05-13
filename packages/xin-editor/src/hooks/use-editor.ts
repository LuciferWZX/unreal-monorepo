import { withReact } from 'slate-react';
import { createEditor, Descendant, Editor } from 'slate';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { withHistory } from 'slate-history';
import { withCheckList } from '@/plugins';
import { CustomElementType } from '@/types';
import withOrderedList from '@/plugins/with-ordered-list';
const useEditor = (): [
  Editor,
  { showPlaceholder: boolean; handlePlaceholder: (val: Descendant[]) => void },
] => {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);
  const editor = useMemo(
    () => withOrderedList(withCheckList(withReact(withHistory(createEditor())))),
    []
  );
  const handlePlaceholder = (val: Descendant[]) => {
    // try {
    //   if (val.length === 1 &&val[0].type===P val[0].children[0].text === '') {
    //   }
    // } catch (e) {
    //   console.error('[结构出错:]', e);
    // }
    // console.log(111, val);
  };
  return [editor, { showPlaceholder, handlePlaceholder }];
};
export default useEditor;
