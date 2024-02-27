import {
  CSSProperties,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import CodeMirror, { EditorState, ReactCodeMirrorRef } from '@uiw/react-codemirror';
import * as editorTheme from '@uiw/codemirror-themes-all';
import { MirrorUtils } from '@/utils/MirrorUtils';
import { Completion } from '@codemirror/autocomplete';
import { LanguageName } from '@uiw/codemirror-extensions-langs';
import { EditorView } from '@codemirror/view';
import { useCodeMirror } from '@uiw/react-codemirror/src/useCodeMirror';
interface BaseEditProps {
  height?: string;
  width?: string;
  maxWidth?: string;
  maxHeight?: string;
  className?: string;
  style?: CSSProperties;
  readonly?: boolean;
}
interface ReactCodeEditorProps extends BaseEditProps {
  completions?: Completion[];
  language?: LanguageName;
  theme?: 'light' | 'dark' | 'none' | 'githubDark';
}
export interface ReactCodeEditorRef {
  editor?: HTMLDivElement | null;
  state?: EditorState;
  view?: EditorView;
}
const ReactCodeEditor = forwardRef<ReactCodeEditorRef, ReactCodeEditorProps>((props, ref) => {
  const {
    height,
    width,
    maxHeight,
    maxWidth,
    style,
    readonly,
    theme,
    className,
    completions,
    language,
  } = props;
  const [value, setValue] = useState('');
  const editorRef = useRef<ReactCodeMirrorRef>(null);
  const { state, view } = useCodeMirror({
    container: editorRef.current?.editor,
  });
  useImperativeHandle(
    ref,
    () => {
      return {
        editor: editorRef.current?.editor,
        state: state,
        view: view,
      };
    },
    [editorRef, view, state]
  );
  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  // options: [
  //     {label: "match", type: "keyword"},
  //     {label: "hello", type: "variable", info: "(文本)"},
  //     {label: "magic", type: "text", apply: "⠁⭒*.✩.*⭒⠁", detail: "macro"}
  // ]
  const getPropsTheme = useMemo(() => {
    if (!theme) {
      return undefined;
    }
    if (theme === 'light' || theme === 'dark' || theme === 'none') {
      return theme;
    }
    return editorTheme[theme];
  }, [theme]);
  return (
    <CodeMirror
      ref={editorRef}
      style={style}
      className={className}
      height={height}
      width={width}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      readOnly={readonly}
      theme={getPropsTheme}
      value={value}
      extensions={[
        EditorState.languageData.of(() => [{ autocomplete: completions }]),
        MirrorUtils.getLangs(language ?? 'textile'),
      ]}
      basicSetup={{
        syntaxHighlighting: true,
      }}
      onLoad={(editor) => {
        console.log('editor:', editor);
      }}
      onChange={onChange}
    />
  );
});
export default ReactCodeEditor;
