import { Editor } from 'slate';
import { CustomElement } from '../types';
import { HtmlToSlateConfigOptions } from '../config/htmlToSlateConfig';
export interface ClearConfigProps {
    withHistory?: boolean;
}
declare const Utils: {
    /**
     * 删除 是否连带历史记录也删掉
     * @param editor
     * @param config
     */
    clear: (editor: Editor, config?: ClearConfigProps) => void;
    /**
     * 清空历史记录
     * @param editor
     * @param mode
     */
    clearHistory: (editor: Editor, mode?: 'undos' | 'redos') => void;
    /**
     * 输入框聚焦
     * @param editor
     * @param position
     */
    focus: (editor: Editor, position?: 'start' | 'end') => void;
    /**
     * 输入框全部选中
     * @param editor
     */
    selectAll: (editor: Editor) => void;
    /**
     * 取消选中
     * @param editor
     */
    deselect: (editor: Editor) => void;
    /**
     * 输入框失焦
     * @param editor
     */
    blur: (editor: Editor) => void;
    /**
     * 插入节点
     * @param editor
     * @param nodes
     */
    insertNodes: (editor: Editor, nodes: CustomElement[]) => void;
    /**
     * 更新输入框视图的数据
     * @param editor
     * @param newHtml
     * @param htmlToSlateConfigOptions
     */
    updateValue: (editor: Editor, newHtml?: string, htmlToSlateConfigOptions?: HtmlToSlateConfigOptions) => CustomElement[] | undefined;
};
export default Utils;
