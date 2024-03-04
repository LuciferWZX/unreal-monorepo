import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { Transforms, BaseEditor, Selection } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';
import { EditableProps } from 'slate-react/dist/components/editable';
import { RenderElementConfig } from '../hooks/useRenderElement';
import { CustomElement } from '../types';
import { HtmlToSlateConfigOptions } from '../config/htmlToSlateConfig';
import { SlateToDomConfigOptions } from '../config/slateToDomConfig';
export interface ColorSchema {
    '--border-color'?: string;
    '--hover-border-color'?: string;
    '--active-border-color'?: string;
    '--focused-border-color'?: string;
}
export interface ReactCommentInputRef {
    editor: BaseEditor & ReactEditor & HistoryEditor;
    ReactEditor: typeof ReactEditor;
    Transforms: typeof Transforms;
    actions: {
        clear: () => void;
        insertNode: (node: CustomElement | CustomElement[]) => void;
        clearHistory: (mode?: 'undos' | 'redos') => void;
        selectedAll: () => void;
        deselect: () => void;
        focus: (position?: 'start' | 'end') => void;
        blur: () => void;
        updateValue: (html: string) => void;
    };
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
}
declare const ReactCommentInput: import("react").ForwardRefExoticComponent<ReactCommentInputProps & import("react").RefAttributes<ReactCommentInputRef>>;
export default ReactCommentInput;
