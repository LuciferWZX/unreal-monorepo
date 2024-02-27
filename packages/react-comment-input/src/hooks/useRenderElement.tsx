import { useCallback } from 'react';
import { RenderElementProps } from 'slate-react';
import { CustomElementType } from '@/types';
import DefaultElement from '@/prefabNodes/default';
import ParagraphElement from '@/prefabNodes/paragraph';
import Element = JSX.Element;

export interface RenderElementConfig {
  extendRenderElement?: Array<{
    type: string;
    renderElement: (props: RenderElementProps) => Element;
  }>;
}
const useRenderElement = (config?: RenderElementConfig) => {
  const renderElement = useCallback(
    (props: RenderElementProps) => {
      const { children, ...restProps } = props;
      if (config?.extendRenderElement) {
        for (const { type, renderElement } of config.extendRenderElement) {
          if (restProps.element.type === type) {
            return renderElement(props);
          }
        }
      }
      switch (restProps.element.type) {
        case CustomElementType.DEFAULT: {
          return <DefaultElement {...restProps}>{children}</DefaultElement>;
        }
        case CustomElementType.PARAGRAPH: {
          return <ParagraphElement {...restProps}>{children}</ParagraphElement>;
        }
        default: {
          return <DefaultElement {...restProps}>{children}</DefaultElement>;
        }
      }
    },
    [config?.extendRenderElement]
  );
  return {
    renderElement,
  };
};
export default useRenderElement;
