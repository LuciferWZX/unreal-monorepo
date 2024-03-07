import { Dispatch, ForwardedRef, KeyboardEvent, ReactNode, SetStateAction } from 'react';
import { Editor, Range } from 'slate';
import { MentionConfig, MentionContainerProps, MentionOption } from '../editor';
import { CustomElement } from '../types';
interface MentionValuesType {
    target: Range | undefined;
    index: number;
    search: string;
    ref: ForwardedRef<HTMLDivElement>;
    popOpen: boolean;
    popMenu: ReactNode | null;
    options: Array<MentionOption | unknown>;
}
interface MentionActionsType {
    setTarget: Dispatch<SetStateAction<Range | undefined>>;
    setIndex: Dispatch<SetStateAction<number>>;
    setSearch: Dispatch<SetStateAction<string>>;
    setMention: Dispatch<SetStateAction<MentionConfig | undefined>>;
    setPopOpen: (open: boolean) => void;
    insertMention: (option: MentionOption, nodes?: CustomElement[]) => void;
    onMentionKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
}
declare const useMention: (editor: Editor, theme?: 'dark' | 'light', mentionContainer?: MentionContainerProps) => [MentionValuesType, MentionActionsType];
export default useMention;
