import React from 'react';
import { match } from 'ts-pattern';
import { Editor } from 'slate';
import EditorCommand from '@/core/command';

const useKeyboard = (editor: Editor) => {
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    match(event).with({ ctrlKey: true }, (_evt) => {
      //按住了alt键
      match(_evt.key).with('b', () => {
        console.info('切换加粗');
        event.preventDefault();
        EditorCommand.toggleBoldMark(editor);
      });
    });
  };
  return [onKeyDown];
};
export default useKeyboard;
