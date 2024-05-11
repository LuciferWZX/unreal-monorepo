import { FC } from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { Descendant } from 'slate';
import { useEditor, useRenderElement } from '@/hooks';
import { Editable, Slate } from 'slate-react';
import { getDefaultContent } from '@/core';
import useKeyboard from '@/hooks/use-keyboard';
import { theme, ConfigProvider } from 'antd';

import '@/index.css';
import './index.css';
const { darkAlgorithm, compactAlgorithm } = theme;
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
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          algorithm: theme === 'dark' ? [darkAlgorithm, compactAlgorithm] : [compactAlgorithm],
        }}
      >
        <Slate
          editor={editor}
          onValueChange={(val) => {
            console.log('val',val);
            handlePlaceholder(val);
          }}
          initialValue={initialValue}
        >
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
      </ConfigProvider>
    </StyleProvider>
  );
};
export default WuEditor;
