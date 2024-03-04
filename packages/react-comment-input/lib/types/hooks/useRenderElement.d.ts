/// <reference types="react" />
import { RenderLeafProps } from 'slate-react';
import { RenderCustomElementProps } from '../types';
import Element = JSX.Element;
export interface RenderElementConfig {
    extendRenderElement?: Array<{
        type: string;
        renderElement: (props: RenderCustomElementProps) => Element;
    }>;
}
declare const useRenderElement: (config?: RenderElementConfig, mode?: 'preview') => {
    renderElement: (props: RenderCustomElementProps) => import("react/jsx-runtime").JSX.Element;
    renderLeaf: ({ attributes, children, leaf }: RenderLeafProps) => import("react/jsx-runtime").JSX.Element;
};
export default useRenderElement;
