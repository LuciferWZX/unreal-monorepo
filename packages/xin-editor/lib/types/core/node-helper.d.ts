import { Editor, Node as SlateNode, NodeEntry } from 'slate';
import { CustomElementType } from '../types';
export declare const isSameNode: (editor: Editor) => boolean;
export declare const getSelectedNodesByType: (editor: Editor, types: CustomElementType[]) => NodeEntry<SlateNode>[];
