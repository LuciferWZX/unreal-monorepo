import { Editor, Transforms } from 'slate';
import { ReactEditor } from 'slate-react';
import { CustomElement } from '@/types';
import { emptySlateValue } from '@/utils/constants';
import { isUndefined } from '@wzx-unreal/react-hooks';
import htmlToSlateConfig, { HtmlToSlateConfigOptions } from '@/config/htmlToSlateConfig';
import { htmlToSlate } from '@slate-serializers/html';

export interface ClearConfigProps {
  withHistory?: boolean;
}
const Utils = {
  /**
   * 删除 是否连带历史记录也删掉
   * @param editor
   * @param config
   */
  clear: (editor: Editor, config?: ClearConfigProps) => {
    Transforms.select(editor, []);
    Transforms.delete(editor);
    if (config?.withHistory) {
      editor.history.redos = [];
      editor.history.undos = [];
    }
    editor.onChange();
    editor.normalize();
  },
  /**
   * 清空历史记录
   * @param editor
   * @param mode
   */
  clearHistory: (editor: Editor, mode?: 'undos' | 'redos') => {
    if (mode) {
      editor.history[mode] = [];
      return;
    }
    editor.history.redos = [];
    editor.history.undos = [];
  },
  /**
   * 输入框聚焦
   * @param editor
   * @param position
   */
  focus: (editor: Editor, position?: 'start' | 'end') => {
    if (position === 'start') {
      Transforms.select(editor, {
        anchor: Editor.start(editor, []),
        focus: Editor.start(editor, []),
      });
    }
    if (position === 'end') {
      Transforms.select(editor, {
        anchor: Editor.end(editor, []),
        focus: Editor.end(editor, []),
      });
    }
    ReactEditor.focus(editor);
  },
  /**
   * 输入框全部选中
   * @param editor
   */
  selectAll: (editor: Editor) => {
    Transforms.select(editor, {
      anchor: Editor.start(editor, []),
      focus: Editor.end(editor, []),
    });
  },
  /**
   * 取消选中
   * @param editor
   */
  deselect: (editor: Editor) => {
    Transforms.deselect(editor);
  },
  /**
   * 输入框失焦
   * @param editor
   */
  blur: (editor: Editor) => {
    ReactEditor.blur(editor);
  },
  /**
   * 插入节点
   * @param editor
   * @param nodes
   */
  insertNodes: (editor: Editor, nodes: CustomElement[]) => {
    ReactEditor.focus(editor);
    Transforms.insertFragment(editor, nodes);
    Transforms.move(editor, { distance: 1 });
    editor.normalize();
    editor.onChange();
  },
  /**
   * 更新输入框视图的数据
   * @param editor
   * @param newHtml
   * @param htmlToSlateConfigOptions
   */
  updateValue: (
    editor: Editor,
    newHtml?: string,
    htmlToSlateConfigOptions?: HtmlToSlateConfigOptions
  ) => {
    Utils.selectAll(editor);
    let slateValue = emptySlateValue;
    if (isUndefined(newHtml) || newHtml === '') {
      return slateValue;
    }
    slateValue = htmlToSlate(
      newHtml,
      htmlToSlateConfig(htmlToSlateConfigOptions)
    ) as CustomElement[];
    Utils.insertNodes(editor, slateValue);
  },
};
export default Utils;
