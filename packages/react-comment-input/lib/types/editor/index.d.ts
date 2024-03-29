import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { BaseEditor, Editor, Selection } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';
import { EditableProps } from 'slate-react/dist/components/editable';
import { RenderElementConfig } from '../hooks/useRenderElement';
import { CustomElement } from '../types';
import { HtmlToSlateConfigOptions } from '../config/htmlToSlateConfig';
import { SlateToDomConfigOptions } from '../config/slateToDomConfig';
import { ClearConfigProps } from '../utils/utils';
import { NodeMatch } from 'slate/dist/interfaces/editor';
export interface ColorSchema {
    '--border-color'?: string;
    '--hover-border-color'?: string;
    '--active-border-color'?: string;
    '--focused-border-color'?: string;
}
export interface InputActions {
    clear: (editor: Editor, config?: ClearConfigProps) => void;
    getText: (editor: Editor, mode?: 'selection' | 'all') => string;
    getTextToNode: (editor: Editor, direction?: 'forward' | 'back') => string;
    getNodes: (editor: Editor, match: NodeMatch<CustomElement> | undefined) => any;
    insertNodes: (editor: Editor, nodes: CustomElement[]) => void;
    clearHistory: (editor: Editor, mode?: 'undos' | 'redos') => void;
    selectAll: (editor: Editor) => void;
    deselect: (editor: Editor) => void;
    focus: (editor: Editor, position?: 'start' | 'end') => void;
    blur: (editor: Editor) => void;
    updateValue: (editor: Editor, newHtml: string) => void;
    insertMention: (option: MentionOption, nodes?: CustomElement[]) => void;
}
export interface ReactCommentInputRef {
    editor: BaseEditor & ReactEditor & HistoryEditor;
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
    customMentionItem?: (option: T, attributes: {
        'data-mention-index': string;
        className: string;
    }, data: {
        isSelected: boolean;
        disabled: boolean;
    }, actions: {
        onClick?: MouseEventHandler<HTMLElement>;
    }) => ReactNode;
}
export interface MentionContainerProps {
    className?: string;
    style?: CSSProperties;
    customLoading?: ReactNode;
    container?: HTMLElement;
    fullWidth?: boolean;
    position?: 'top' | 'bottom';
    open?: boolean;
    onFilter?: (options: Array<MentionOption>) => void;
}
export interface ReactCommentInputProps extends Omit<EditableProps, 'value' | 'onChange' | 'defaultValue'> {
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
    id?: string;
    editableStyle?: CSSProperties;
}
declare const ReactCommentInput: import("react").ForwardRefExoticComponent<ReactCommentInputProps & import("react").RefAttributes<ReactCommentInputRef>>;
export default ReactCommentInput;
