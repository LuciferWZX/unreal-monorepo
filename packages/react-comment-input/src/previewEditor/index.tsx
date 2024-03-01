import { CSSProperties, FC, useCallback, useEffect, useMemo } from 'react';
import { CustomElement, CustomElementType } from '@/types';
import { Editable, Slate, withReact } from 'slate-react';
import withInLine from '@/hoc/withInLine';
import { createEditor, Editor, Transforms } from 'slate';
import { isUndefined } from '@unreal/react-hooks';
import { htmlToSlate } from '@slate-serializers/html';
import htmlToSlateConfig, { HtmlToSlateConfigOptions } from '@/config/htmlToSlateConfig';
import { SlateToDomConfigOptions } from '@/config/slateToDomConfig';
import useRenderElement, { RenderElementConfig } from '@/hooks/useRenderElement';
const emptyValue: CustomElement[] = [
  {
    type: CustomElementType.PARAGRAPH,
    children: [{ text: '' }],
  },
];
export interface PreviewEditorProps {
  value?: string;
  htmlToSlateConfigOptions?: HtmlToSlateConfigOptions;
  slateToDomConfigOptions?: SlateToDomConfigOptions;
  renderElementConfig?: RenderElementConfig;
  isInlineElementTypes?: string[];
  isVoidElementTypes?: string[];
  isMarkableVoidElementTypes?: string[];
  className?: string;
  style?: CSSProperties;
}
const PreviewEditor: FC<PreviewEditorProps> = (props) => {
  const {
    isInlineElementTypes,
    isVoidElementTypes,
    isMarkableVoidElementTypes,
    value,
    className,
    style,
    htmlToSlateConfigOptions,
    slateToDomConfigOptions,
    renderElementConfig,
  } = props;
  const editor = useMemo(
    () =>
      withReact(
        withInLine(
          createEditor(),
          isInlineElementTypes,
          isVoidElementTypes,
          isMarkableVoidElementTypes
        )
      ),
    []
  );
  const actions = {
    clear: () => {
      Transforms.select(editor, []);
      Transforms.delete(editor);
    },
  };
  const { renderElement, renderLeaf } = useRenderElement(renderElementConfig, 'preview');
  const resetValue = useCallback(
    (val?: string) => {
      actions.clear();
      let slateValue = emptyValue;
      if (isUndefined(val)) {
        return slateValue;
      }
      slateValue = htmlToSlate(val, htmlToSlateConfig(htmlToSlateConfigOptions)) as CustomElement[];
      Transforms.insertFragment(editor, slateValue);
      Editor.normalize(editor);
    },
    [actions, editor, htmlToSlateConfigOptions]
  );
  useEffect(() => {
    console.log('只改变了', value);
    resetValue(value);
  }, [editor, resetValue, value]);

  //默认值
  const _initialValue = useMemo(() => {
    if (isUndefined(value)) {
      return emptyValue;
    }
    return htmlToSlate(value, htmlToSlateConfig(htmlToSlateConfigOptions)) as CustomElement[];
  }, [value, htmlToSlateConfigOptions]);
  return (
    <Slate editor={editor} initialValue={_initialValue}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        className={className}
        style={style}
        readOnly={true}
      />
    </Slate>
  );
};
export default PreviewEditor;
