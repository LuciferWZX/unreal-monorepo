import {CSSProperties, FC, useCallback, useMemo, useState} from "react";
import CodeMirror, {EditorState, ViewUpdate} from '@uiw/react-codemirror';
import {githubDark} from '@uiw/codemirror-themes-all'
import {MirrorUtils} from "@/utils/MirrorUtils";
import {autocompletion, completeFromList, Completion, CompletionContext} from '@codemirror/autocomplete';
import {LanguageName} from "@uiw/codemirror-extensions-langs";
interface BaseEditProps {
    height?: string;
    width?: string;
    className?:string
    style?:CSSProperties
}
interface ReactCodeEditorProps extends BaseEditProps {
    completions?:Completion[]
    language?:LanguageName
}
const ReactCodeEditor:FC<ReactCodeEditorProps> = (props) => {
    const {height,width,style,className,completions,language}=props
    const [value, setValue] = useState("console.log('hello world!');");
    const onChange = useCallback((val:string, viewUpdate:ViewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);
    const getCompletions = useCallback((context:CompletionContext)=>{
        return MirrorUtils.getCompletions(context,completions??[])
    },[completions])
    // options: [
    //     {label: "match", type: "keyword"},
    //     {label: "hello", type: "variable", info: "(文本)"},
    //     {label: "magic", type: "text", apply: "⠁⭒*.✩.*⭒⠁", detail: "macro"}
    // ]

  return(
      <CodeMirror
          style={style}
          className={className}
          height={height}
          width={width}
          theme={githubDark}
          value={value}
          extensions={[
              EditorState.languageData.of(() => [{ autocomplete: completions }]),
              // autocompletion({override:[completeFromList(completions??[])]}),
              MirrorUtils.getLangs(language??'textile')]}
          basicSetup={{
              syntaxHighlighting:true
          }}
          onChange={onChange} />
  )
}
export default ReactCodeEditor