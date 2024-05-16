import { Editor, NodeEntry } from 'slate';
import { CustomElement } from '../../../custom-slate';
export declare function normalizeLink(editor: Editor, entry: NodeEntry): boolean;
export declare function isNodeChildrenIsTargetType(children: CustomElement[], type?: string | any[], index?: number): any;
export declare function delChildrenNotAllowComponent(editor: Editor, children: any[], componentsOk: (string | undefined)[], path: number[], defaultChildren?: any): void;
export declare function getNodeString(node: Node & any): string;
