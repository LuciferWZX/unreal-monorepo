import React, { useRef } from 'react';
import { match } from 'ts-pattern';
import { Editor } from 'slate';
import EditorCommand from '@/core/command';
import { HotKey } from '@/core';
import { TextAlign } from '@/types';
import { HistoryEditor } from 'slate-history';
import onKeyDownTable from '@/modules/table-module/onKeyDownTable';

const useKeyboard = (editor: Editor) => {
  const isDoubleClickRef = useRef(false);
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDownTable(event, editor);
    const controlKey = event.ctrlKey || event.metaKey;
    match(controlKey)
      .with(true, () => {
        //按住了control
        match(event)
          .with({ shiftKey: true }, (evt) => {
            //按住了control+shift
            match(evt).with({ key: 'T' }, () => {
              //按住了control+shift+7
              console.info('切换CheckList');
              event.preventDefault();
              EditorCommand.toggleCheckListNode(editor);
            });
            match(evt).with({ key: 'L' }, () => {
              //按住了control+shift+7
              console.info('切换align-left');
              event.preventDefault();
              EditorCommand.toggleTextAlignMark(editor, TextAlign.Start);
            });
            match(evt).with({ key: 'C' }, () => {
              //按住了control+shift+7
              console.info('切换align-center');
              event.preventDefault();
              EditorCommand.toggleTextAlignMark(editor, TextAlign.Center);
            });
            match(evt).with({ key: 'R' }, () => {
              //按住了control+shift+7
              console.info('切换align-right');
              event.preventDefault();
              EditorCommand.toggleTextAlignMark(editor, TextAlign.End);
            });
          })
          .with({ altKey: true }, (evt) => {
            match(evt).with({ key: 'R' }, () => {
              console.info('还原');
              evt.preventDefault();
              EditorCommand.restoreNormal(editor);
            });
          })
          .with({ key: 'a' }, () => {
            //全选
            if (!isDoubleClickRef.current) {
              console.info('模块内全选');
              isDoubleClickRef.current = true;
              const stop = EditorCommand.selectAllInModule(editor);
              if (stop) {
                event.preventDefault();
              }
              setTimeout(() => {
                isDoubleClickRef.current = false;
              }, 400);
            } else {
              console.info('编辑器全选');
              isDoubleClickRef.current = false;
            }
          })
          .with({ key: HotKey.Bold }, () => {
            //按住control+b
            console.info('切换加粗');
            event.preventDefault();
            EditorCommand.toggleBoldMark(editor);
          })
          .with({ key: HotKey.Italic }, () => {
            //按住control+b
            console.info('切换斜体');
            event.preventDefault();
            EditorCommand.toggleItalicMark(editor);
          })
          .with({ key: HotKey.Underline }, () => {
            //按住control+b
            console.info('切换下划线');
            event.preventDefault();
            EditorCommand.toggleUnderlineMark(editor);
          });
      })
      .otherwise(() => {
        //不按control
        const { altKey, shiftKey } = event;
        match(!altKey && !shiftKey).with(true, () => {
          //alt和shift都没按
          match(event.key).with(HotKey.Tab, () => {
            //按tab进行缩进
            console.info('缩进');
            event.preventDefault();
            HistoryEditor.withoutMerging(editor, () => {
              EditorCommand.indent(editor);
            });
          });
        });
      });
  };
  return [onKeyDown];
};
export default useKeyboard;
