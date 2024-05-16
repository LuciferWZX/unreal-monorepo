import { Editor } from 'slate';
export declare function consumePlugins(pluginConsumer: Editor, plugins: ((editor: Editor) => Editor)[]): Editor;
