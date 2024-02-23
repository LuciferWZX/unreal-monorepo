import {CSSProperties, FC, forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState} from "react";
import CodeMirror, {EditorState, ReactCodeMirrorRef, ViewUpdate} from '@uiw/react-codemirror';
import {githubDark} from '@uiw/codemirror-themes-all'
import {MirrorUtils} from "@/utils/MirrorUtils";
import {autocompletion, completeFromList, Completion, CompletionContext} from '@codemirror/autocomplete';
import {LanguageName} from "@uiw/codemirror-extensions-langs";
import {EditorView} from "@codemirror/view";
import {useCodeMirror} from "@uiw/react-codemirror/src/useCodeMirror";
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
export interface ReactCodeEditorRef {
    editor?:  HTMLDivElement | null ;
    state?: EditorState;
    view?: EditorView;
}
const ReactCodeEditor= forwardRef<ReactCodeEditorRef,ReactCodeEditorProps>((props,ref) => {
    const {height,width,style,className,completions,language}=props
    const [value, setValue] = useState("console.log('hello world!');");
    const editorRef = useRef<ReactCodeMirrorRef>(null)
    const { state, view } = useCodeMirror({
        container: editorRef.current?.editor,
    })
    useImperativeHandle(ref,()=>{
        return {
            editor:editorRef.current?.editor,
            state:state,
            view:view
        }
    },[editorRef,view,state])
    const onChange = useCallback((val:string, viewUpdate:ViewUpdate) => {
        console.log('ref:', ref);
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
            ref={editorRef}
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
            onLoad={(editor) => {
                console.log('editor:', editor);
            }}
            onChange={onChange} />
    )
})
export default ReactCodeEditor