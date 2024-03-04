import { CSSProperties, FC, useCallback, useEffect, useMemo } from 'react';
import { CustomElement, CustomElementType } from '@/types';
import { Editable, Slate, withReact } from 'slate-react';
import withInLine from '@/hoc/withInLine';
import { createEditor, Editor, Transforms } from 'slate';
import { isUndefined } from '@wzx-unreal/react-hooks';
import { htmlToSlate } from '@slate-serializers/html';
import htmlToSlateConfig from '@/config/htmlToSlateConfig';
import useRenderElement from '@/hooks/useRenderElement';
import { ReactCommentInputProps } from '@/editor';
import { useReactCommentInputStore } from '@/store/useReactCommentInputStore';
import { useShallow } from 'zustand/react/shallow';
const emptyValue: CustomElement[] = [
  {
    type: CustomElementType.PARAGRAPH,
    children: [{ text: '' }],
  },
];
// export interface PreviewEditorProps {
//   value?: string;
//   htmlToSlateConfigOptions?: HtmlToSlateConfigOptions;
//   slateToDomConfigOptions?: SlateToDomConfigOptions;
//   renderElementConfig?: RenderElementConfig;
//   isInlineElementTypes?: string[];
//   isVoidElementTypes?: string[];
//   isMarkableVoidElementTypes?: string[];
//   className?: string;
//   style?: CSSProperties;
// }
export interface PreviewEditorProps
  extends Pick<
    ReactCommentInputProps,
    | 'value'
    | 'htmlToSlateConfigOptions'
    | 'slateToDomConfigOptions'
    | 'renderElementConfig'
    | 'isInlineElementTypes'
    | 'isVoidElementTypes'
    | 'isMarkableVoidElementTypes'
    | 'className'
    | 'style'
  > {
  mode?: 'preview';
}

const PreviewEditor: FC<PreviewEditorProps> = (props) => {
  const basicProps = useReactCommentInputStore(useShallow((state) => state.basicProps));
  const {
    isInlineElementTypes = basicProps?.isInlineElementTypes,
    isVoidElementTypes = basicProps?.isVoidElementTypes,
    isMarkableVoidElementTypes = basicProps?.isMarkableVoidElementTypes,
    value = basicProps?.value,
    className = basicProps?.className,
    style = basicProps?.style,
    htmlToSlateConfigOptions = basicProps?.htmlToSlateConfigOptions,
    slateToDomConfigOptions = basicProps?.slateToDomConfigOptions,
    renderElementConfig = basicProps?.renderElementConfig,
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
  const actions: { clear: () => void } = {
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
