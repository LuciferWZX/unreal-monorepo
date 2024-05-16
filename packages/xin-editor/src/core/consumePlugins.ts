import { Editor } from 'slate';

export function consumePlugins(
  pluginConsumer: Editor,
  plugins: ((editor: Editor) => Editor)[]
): Editor {
  let out = pluginConsumer;
  plugins.forEach((plugin) => {
    out = process(out, plugin);
  });
  return out;
}
function process(editor: Editor, curPlugin: (editor: Editor) => Editor) {
  return curPlugin(editor);
}
