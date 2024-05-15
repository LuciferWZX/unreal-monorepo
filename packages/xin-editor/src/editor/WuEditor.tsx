import { FC, forwardRef, useImperativeHandle } from 'react';
import { Descendant, Editor } from 'slate';
import { useEditor, useRenderElement } from '@/hooks';
import { Editable, Slate } from 'slate-react';
import { getDefaultContent } from '@/core';
import useKeyboard from '@/hooks/use-keyboard';

import '@/index.css';
import './index.css';
import AntdWrapper from '@/modules/antd-wrapper';
import Toolbar from '@/editor/toolbar';
import cn from 'classnames';
import useDecorate from '@/hooks/useDecorate';
export interface WuEditorProps<VT extends Descendant = Descendant> {
  placeholder?: string;
  initialValue?: VT[];
  theme?: 'light' | 'dark';
  classes?: {
    toolbar?: string;
    editor?: string;
  };
}
export interface WuEditorRef {
  editor: Editor;
}
const WuEditor = forwardRef<WuEditorRef, WuEditorProps>((props, ref) => {
  const { theme, placeholder, classes, initialValue = getDefaultContent() } = props;
  const [editor, { showPlaceholder, handlePlaceholder }] = useEditor();
  useImperativeHandle(ref, () => {
    return {
      editor: editor,
    };
  });
  const { renderElement, renderLeaf, renderPlaceholder } = useRenderElement();
  const [onKeyDown] = useKeyboard(editor);
  const { decorate } = useDecorate();
  return (
    <AntdWrapper theme={theme}>
      <Slate
        editor={editor}
        onValueChange={(val) => {
          console.log('val', val);
          handlePlaceholder(val);
        }}
        onSelectionChange={(selection) => {
          console.log('selection:', selection);
        }}
        initialValue={initialValue}
      >
        <Toolbar className={cn(classes?.toolbar)} />
        <Editable
          // onCopy={(e) => {
          //   console.log(e);
          //   const clipboardData = e.clipboardData;
          //   const copiedText = clipboardData.getData('text/plain');
          //   console.log('Copied text:', copiedText);
          // }}
          // onPaste={(e) => {
          //   const clipboardData = e.clipboardData;
          //   console.log(e);
          //   const pastedText = clipboardData.getData('text/plain');
          //   console.log('Pasted text:', pastedText);
          // }}
          decorate={decorate}
          className={cn('wu_editable', classes?.editor)}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          renderPlaceholder={renderPlaceholder}
          spellCheck={true}
          placeholder={showPlaceholder ? placeholder : undefined}
          onKeyDown={onKeyDown}
        />
      </Slate>
    </AntdWrapper>
  );
});
export default WuEditor;
