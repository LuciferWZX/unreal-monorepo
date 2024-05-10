import { FC } from 'react';
import { Descendant } from 'slate';
import { useEditor, useRenderElement } from '@/hooks';
import { Editable, Slate } from 'slate-react';
import { getDefaultContent } from '@/core';
import useKeyboard from '@/hooks/use-keyboard';
import '@/index.css';
export interface WuEditorProps<VT extends Descendant = Descendant> {
  placeholder?: string;
  initialValue?: VT[];
}
const WuEditor: FC<WuEditorProps> = (props) => {
  const { placeholder, initialValue = getDefaultContent() } = props;
  const [editor] = useEditor();
  const { renderElement, renderLeaf } = useRenderElement();
  const [onKeyDown] = useKeyboard(editor);
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
      />
    </Slate>
  );
};
export default WuEditor;
