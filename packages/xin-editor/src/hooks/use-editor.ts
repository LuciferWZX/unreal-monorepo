import { withReact } from 'slate-react';
import { createEditor } from 'slate';
import { useState } from 'react';
import { withHistory } from 'slate-history';
const useEditor = () => {
  const [editor] = useState(() => withReact(withHistory(createEditor())));
  return [editor];
};
export default useEditor;
