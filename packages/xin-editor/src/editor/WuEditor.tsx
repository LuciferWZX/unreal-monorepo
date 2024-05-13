import { FC } from 'react';
import { Descendant } from 'slate';
import { useEditor, useRenderElement } from '@/hooks';
import { Editable, Slate } from 'slate-react';
import { getDefaultContent } from '@/core';
import useKeyboard from '@/hooks/use-keyboard';

import '@/index.css';
import './index.css';
import AntdWrapper from '@/modules/antd-wrapper';
import Toolbar from '@/editor/toolbar';
export interface WuEditorProps<VT extends Descendant = Descendant> {
  placeholder?: string;
  initialValue?: VT[];
  theme?: 'light' | 'dark';
}
const WuEditor: FC<WuEditorProps> = (props) => {
  const { theme, placeholder, initialValue = getDefaultContent() } = props;
  const [editor, { showPlaceholder, handlePlaceholder }] = useEditor();
  const { renderElement, renderLeaf, renderPlaceholder } = useRenderElement();
  const [onKeyDown] = useKeyboard(editor);
  return (
    <AntdWrapper theme={theme}>
      <Slate
        editor={editor}
        onValueChange={(val) => {
          console.log('val', val);
          handlePlaceholder(val);
        }}
        // onSelectionChange={selection => {
        //   console.log(123,selection);
        // }}
        initialValue={initialValue}
      >
        <Toolbar />
        <Editable
          className={'wu_editable'}
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
};
export default WuEditor;
