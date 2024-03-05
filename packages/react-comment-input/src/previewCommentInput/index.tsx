import { FC, useEffect, useMemo } from 'react';
import { CustomElement } from '@/types';
import { Editable, Slate, withReact } from 'slate-react';
import withInLine from '@/hoc/withInLine';
import { createEditor } from 'slate';
import { isUndefined } from '@wzx-unreal/react-hooks';
import { htmlToSlate } from '@slate-serializers/html';
import htmlToSlateConfig from '@/config/htmlToSlateConfig';
import useRenderElement from '@/hooks/useRenderElement';
import { ReactCommentInputProps } from '@/editor';
import { useReactCommentInputStore } from '@/store/useReactCommentInputStore';
import { useShallow } from 'zustand/react/shallow';
import Utils from '@/utils/utils';
import { emptySlateValue } from '@/utils/constants';

export interface PreviewCommentInputProps
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

const PreviewCommentInput: FC<PreviewCommentInputProps> = (props) => {
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
  const { renderElement, renderLeaf } = useRenderElement(renderElementConfig, 'preview');

  /**
   * 当值发生变化的时候,更新视图
   */
  useEffect(() => {
    Utils.updateValue(editor, value, htmlToSlateConfigOptions);
  }, [editor, htmlToSlateConfigOptions, value]);

  //默认值
  const _initialValue = useMemo(() => {
    if (isUndefined(value) || value === '') {
      return emptySlateValue;
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
export default PreviewCommentInput;
