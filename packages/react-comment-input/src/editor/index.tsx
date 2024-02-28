import { FC, forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { Descendant, createEditor, Editor, Transforms, BaseEditor } from 'slate';
import { HistoryEditor, withHistory } from 'slate-history';
import { Editable, ReactEditor, RenderLeafProps, Slate, withReact } from 'slate-react';
import withInLine from '@/hoc/withInLine';
import { EditableProps } from 'slate-react/dist/components/editable';
import useRenderElement, { RenderElementConfig } from '@/hooks/useRenderElement';
import { CustomElement, CustomElementType } from '@/types';
import { htmlToSlate, slateToHtml } from '@slate-serializers/html';
import { ClassNames, isUndefined, useControllableValue, useFocusWithin } from '@unreal/react-hooks';
import htmlToSlateConfig, { HtmlToSlateConfigOptions } from '@/config/htmlToSlateConfig';
import slateToDomConfig, { SlateToDomConfigOptions } from '@/config/slateToDomConfig';
import './index.less';
const defaultInitialValue: CustomElement[] = [
  {
    type: CustomElementType.PARAGRAPH,
    children: [{ text: '' }],
  },
];
export interface ColorSchema {
  '--border-color'?: string;
  '--hover-border-color'?: string;
  '--active-border-color'?: string;
  '--focused-border-color'?: string;
}
export interface ReactCommentInputRef {
  editor: BaseEditor & ReactEditor & HistoryEditor;
  ReactEditor: typeof ReactEditor;
  transforms: typeof Transforms;
}
export interface ReactCommentInputProps
  extends Omit<EditableProps, 'value' | 'onChange' | 'defaultValue'> {
  value?: string;
  onChange?: (html: string) => void;
  renderElementConfig?: RenderElementConfig;
  htmlToSlateConfigOptions?: HtmlToSlateConfigOptions;
  slateToDomConfigOptions?: SlateToDomConfigOptions;
  colorSchema?: ColorSchema;
  isInlineElementTypes?: string[];
  isVoidElementTypes?: string[];
}
const ReactCommentInput = forwardRef<ReactCommentInputRef, ReactCommentInputProps>((props, ref) => {
  const {
    value: _value,
    onChange: _onChange,
    renderElementConfig,
    htmlToSlateConfigOptions,
    slateToDomConfigOptions,
    className,
    colorSchema,
    isInlineElementTypes,
    isVoidElementTypes,
    ...editableProps
  } = props;
  const boxRef = useRef<HTMLDivElement>(null);
  const isFocused = useFocusWithin(boxRef);
  const controllableProps = { value: _value, onChange: _onChange };
  const editor = useMemo(
    () =>
      withReact(withHistory(withInLine(createEditor(), isInlineElementTypes, isVoidElementTypes))),
    []
  );
  const [value, onChange] = useControllableValue<string>(controllableProps);
  const { renderElement } = useRenderElement(renderElementConfig);
  useImperativeHandle(ref, () => {
    return {
      editor: editor,
      transforms: Transforms,
      ReactEditor: ReactEditor,
    };
  });
  //默认值
  const _initialValue = useMemo(() => {
    if (isUndefined(value)) {
      return defaultInitialValue;
    }
    return htmlToSlate(value, htmlToSlateConfig(htmlToSlateConfigOptions)) as CustomElement[];
  }, [value, htmlToSlateConfigOptions]);
  //值更新
  const slateOnChange = useCallback(
    (_value: Descendant[]) => {
      console.log('raw:', _value);
      const _html = slateToHtml(_value, slateToDomConfig(slateToDomConfigOptions));
      onChange(_html);
    },
    [slateToDomConfigOptions]
  );
  const renderLeaf = useCallback(({ attributes, children, leaf }: RenderLeafProps) => {
    return (
      <span
        {...attributes}
        style={{
          fontWeight: leaf.bold ? 'bold' : 'normal',
          // fontStyle: leaf?.italic ? 'italic' : 'normal',
        }}
      >
        {children}
      </span>
    );
  }, []);
  //类名
  const classNames = ClassNames(
    'unreal-comment',
    { 'unreal-comment-focused': isFocused },
    className
  );
  return (
    <Slate editor={editor} initialValue={_initialValue} onChange={slateOnChange}>
      <div style={{ ...(colorSchema as Record<string, any>) }} ref={boxRef} className={classNames}>
        <Editable
          className={'unreal-comment-editable'}
          {...editableProps}
          renderElement={editableProps?.renderElement || renderElement}
          renderLeaf={renderLeaf}
        />
      </div>
    </Slate>
  );
});
export default ReactCommentInput;
