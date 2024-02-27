import { FC, useMemo } from 'react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import withInLine from '@/hoc/withInLine';
import { EditableProps } from 'slate-react/dist/components/editable';
import useRenderElement, { RenderElementConfig } from '@/hooks/useRenderElement';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];
export interface ReactCommentInputProps extends EditableProps {
  renderElementConfig: RenderElementConfig;
}
const ReactCommentInput: FC<ReactCommentInputProps> = (props) => {
  const { renderElementConfig, ...editableProps } = props;
  const editor = useMemo(() => withReact(withHistory(withInLine(createEditor()))), []);
  const { renderElement } = useRenderElement(renderElementConfig);
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable {...editableProps} renderElement={editableProps?.renderElement || renderElement} />
    </Slate>
  );
};
export default ReactCommentInput;
