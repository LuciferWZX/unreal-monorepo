import { RenderElementProps } from 'slate-react/dist/components/editable';
import { RenderLeafProps } from 'slate-react';
declare const useRenderElement: () => {
    renderElement: (props: RenderElementProps) => import("react/jsx-runtime").JSX.Element;
    renderLeaf: (props: RenderLeafProps) => import("react/jsx-runtime").JSX.Element;
};
export default useRenderElement;
