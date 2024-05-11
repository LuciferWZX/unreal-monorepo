import React from 'react';
import { match } from 'ts-pattern';
import { Editor } from 'slate';
import EditorCommand from '@/core/command';

const useKeyboard = (editor: Editor) => {
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const controlKey = event.ctrlKey || event.metaKey;
    match(controlKey).with(true, () => {
      //按住了control
      match(event)
        .with({ shiftKey: true }, (evt) => {
          //按住了control+shift
          match(evt).with({ key: '&' }, () => {
            //按住了control+shift+7
            console.info('切换CheckList');
            event.preventDefault();
            EditorCommand.toggleCheckListNode(editor);
          });
        })
        .with({ key: 'b' }, () => {
          console.log(event);
          //按住control+b
          console.info('切换加粗');
          event.preventDefault();
          EditorCommand.toggleBoldMark(editor);
        });
    });
  };
  return [onKeyDown];
};
export default useKeyboard;
