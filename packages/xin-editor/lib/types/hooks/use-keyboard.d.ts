import React from 'react';
import { Editor } from 'slate';
declare const useKeyboard: (editor: Editor) => ((event: React.KeyboardEvent<HTMLDivElement>) => void)[];
export default useKeyboard;
