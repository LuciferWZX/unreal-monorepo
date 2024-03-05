import {
  CSSProperties,
  forwardRef,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { Descendant, createEditor, Transforms, BaseEditor, Editor, Selection, Range } from 'slate';
import { HistoryEditor, withHistory } from 'slate-history';
import { Editable, ReactEditor, Slate, withReact } from 'slate-react';
import withInLine from '@/hoc/withInLine';
import { EditableProps } from 'slate-react/dist/components/editable';
import useRenderElement, { RenderElementConfig } from '@/hooks/useRenderElement';
import { CustomElement, CustomElementType } from '@/types';
import { htmlToSlate, slateToHtml } from '@slate-serializers/html';
import {
  ClassNames,
  isUndefined,
  useControllableValue,
  useFocusWithin,
} from '@wzx-unreal/react-hooks';
import htmlToSlateConfig, { HtmlToSlateConfigOptions } from '@/config/htmlToSlateConfig';
import slateToDomConfig, { SlateToDomConfigOptions } from '@/config/slateToDomConfig';
import './index.less';
import useMention from '@/hooks/useMention';
import { useReactCommentInputStore } from '@/store/useReactCommentInputStore';
import { useShallow } from 'zustand/react/shallow';
import Utils, { ClearConfigProps } from '@/utils/utils';
import { emptySlateValue } from '@/utils/constants';

export interface ColorSchema {
  '--border-color'?: string;
  '--hover-border-color'?: string;
  '--active-border-color'?: string;
  '--focused-border-color'?: string;
}
export interface InputActions {
  clear: (editor: Editor, config?: ClearConfigProps) => void;
  insertNodes: (editor: Editor, nodes: CustomElement[]) => void;
  clearHistory: (editor: Editor, mode?: 'undos' | 'redos') => void;
  selectAll: (editor: Editor) => void;
  deselect: (editor: Editor) => void;
  focus: (editor: Editor, position?: 'start' | 'end') => void;
  blur: (editor: Editor) => void;
  updateValue: (editor: Editor, newHtml: string) => void;
}
export interface ReactCommentInputRef {
  editor: BaseEditor & ReactEditor & HistoryEditor;
  ReactEditor: typeof ReactEditor;
  Transforms: typeof Transforms;
  actions: InputActions;
}
export interface MentionOption {
  label: string;
  value: any;
  disabled?: boolean;
  [key: string]: any;
}
export interface MentionConfig<T = MentionOption> {
  trigger: string;
  filterKeys?: Array<'label' | 'value' | string>;
  options: Array<T> | ((words: string) => Promise<Array<T>>);
  eclipse?: boolean;
  customElement?: (option: T) => CustomElement | undefined;
  customMentionItem?: (
    option: T,
    attributes: { 'data-mention-index': string; className: string },
    data: { isSelected: boolean; disabled: boolean },
    actions: { onClick?: MouseEventHandler<HTMLElement> }
  ) => ReactNode;
}
export interface MentionContainerProps {
  className?: string;
  style?: CSSProperties;
  customLoading?: ReactNode;
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
  isMarkableVoidElementTypes?: string[];
  onSelectionChange?: (selection: Selection) => void;
  mentions?: MentionConfig[];
  mentionContainer?: MentionContainerProps;
  theme?: 'dark' | 'light';
}
const ReactCommentInput = forwardRef<ReactCommentInputRef, ReactCommentInputProps>((props, ref) => {
  const basicProps = useReactCommentInputStore(useShallow((state) => state.basicProps));
  const {
    value: _value = basicProps?.value,
    onChange: _onChange,
    renderElementConfig = basicProps?.renderElementConfig,
    htmlToSlateConfigOptions = basicProps?.htmlToSlateConfigOptions,
    slateToDomConfigOptions = basicProps?.slateToDomConfigOptions,
    className = basicProps?.className,
    colorSchema,
    isInlineElementTypes = basicProps?.isInlineElementTypes,
    isVoidElementTypes = basicProps?.isVoidElementTypes,
    isMarkableVoidElementTypes = basicProps?.isMarkableVoidElementTypes,
    onSelectionChange,
    mentions,
    onKeyDown,
    theme,
    mentionContainer,
    ...editableProps
  } = props;
  const boxRef = useRef<HTMLDivElement>(null);
  const isFocused = useFocusWithin(boxRef);
  const controllableProps = { value: _value, onChange: _onChange };
  const editor = useMemo(
    () =>
      withReact(
        withHistory(
          withInLine(
            createEditor(),
            isInlineElementTypes,
            isVoidElementTypes,
            isMarkableVoidElementTypes
          )
        )
      ),
    []
  );
  const [value, onChange] = useControllableValue<string>(controllableProps);
  //提及部分的数据
  const [{ popMenu }, { onMentionKeyDown, setTarget, setIndex, setSearch, setMention }] =
    useMention(editor, theme, mentionContainer);
  //渲染自定义元素
  const { renderElement, renderLeaf } = useRenderElement(renderElementConfig);
  //暴露的Ref
  useImperativeHandle(ref, () => {
    return {
      editor: editor,
      Transforms: Transforms,
      ReactEditor: ReactEditor,
      actions: {
        clear: Utils.clear,
        updateValue: (editor, _html) => Utils.updateValue(editor, _html, htmlToSlateConfigOptions),
        clearHistory: Utils.clearHistory,
        focus: Utils.focus,
        selectAll: Utils.selectAll,
        deselect: Utils.deselect,
        blur: Utils.blur,
        insertNodes: Utils.insertNodes,
      },
    };
  });
  //默认值
  const _initialValue = useMemo(() => {
    if (isUndefined(value) || value === '') {
      return emptySlateValue;
    }
    return htmlToSlate(value, htmlToSlateConfig(htmlToSlateConfigOptions)) as CustomElement[];
  }, [value, htmlToSlateConfigOptions]);
  //值更新
  const slateOnChange = useCallback(
    (_value: Descendant[]) => {
      const _html = slateToHtml(_value, slateToDomConfig(slateToDomConfigOptions));
      onChange(_html);
    },
    [onChange, slateToDomConfigOptions]
  );
  //触发到提及
  const handleTrigger = useCallback(() => {
    if (!mentions) {
      return;
    }
    const { selection } = editor;
    if (selection && Range.isCollapsed(selection)) {
      const [start] = Range.edges(selection);
      const wordBefore = Editor.before(editor, start, { unit: 'word' });
      const before = wordBefore && Editor.before(editor, wordBefore);
      const beforeRange = before && Editor.range(editor, before, start);
      const beforeText = beforeRange && Editor.string(editor, beforeRange);
      // const beforeMatch = beforeText && beforeText.match(/^@(\w+)$/);
      let beforeMatch: RegExpMatchArray | '' | undefined | null = undefined;
      for (let i = 0; i < mentions.length; i++) {
        const { trigger } = mentions[i];
        const regex = new RegExp(`^${trigger}(\\w+)$`);
        beforeMatch = beforeText && beforeText.match(regex);
        if (beforeMatch) {
          setMention(mentions[i]);
          break;
        }
      }
      if (!beforeMatch) {
        setMention(undefined);
      }
      const after = Editor.after(editor, start);
      const afterRange = Editor.range(editor, start, after);
      const afterText = Editor.string(editor, afterRange);
      const afterMatch = afterText.match(/^(\s|$)/);
      if (beforeMatch && afterMatch) {
        setTarget(beforeRange);
        setSearch(beforeMatch[1]);
        return;
      }
    }

    setTarget(undefined);
  }, [editor, mentions, setIndex, setMention, setSearch, setTarget]);

  //类名
  const classNames = ClassNames(
    'unreal-comment',
    { 'unreal-comment-focused': isFocused },
    className
  );
  return (
    <Slate
      editor={editor}
      initialValue={_initialValue}
      onValueChange={slateOnChange}
      onChange={() => {
        handleTrigger();
      }}
      onSelectionChange={onSelectionChange}
    >
      {popMenu}
      <div
        style={{ ...(colorSchema as Record<string, any>) }}
        ref={boxRef}
        className={classNames}
        onClick={() => {
          ReactEditor.focus(editor);
        }}
      >
        <Editable
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={'unreal-comment-editable'}
          renderElement={editableProps?.renderElement || renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={(e) => {
            onMentionKeyDown(e);
          }}
          {...editableProps}
        />
      </div>
    </Slate>
  );
});
export default ReactCommentInput;
