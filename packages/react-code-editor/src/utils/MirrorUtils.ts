import {LanguageName, loadLanguage} from "@uiw/codemirror-extensions-langs";
import {Extension} from "@uiw/react-codemirror";
import {completeFromList, Completion, CompletionContext} from "@codemirror/autocomplete";

export const MirrorUtils ={
  getLangs:(name:LanguageName)=>{
    return loadLanguage(name)  as Extension
  },
  getCompletions(context:CompletionContext,options:Completion[]) {
    let word = context.matchBefore(/\w*/)
    if (!word){
      return null
    }
    if (word.from == word.to && !context.explicit) {
      return null
    }
    return {
      from: word.from,
      options: options
    }
  }
}