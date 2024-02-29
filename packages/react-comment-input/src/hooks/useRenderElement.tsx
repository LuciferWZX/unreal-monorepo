import { useCallback } from 'react';
import { RenderElementProps, RenderLeafProps } from 'slate-react';
import { CustomElementType } from '@/types';
import DefaultElement from '@/prefabNodes/default';
import ParagraphElement from '@/prefabNodes/paragraph';
import Element = JSX.Element;
import MentionNode from '@/prefabNodes/mention';

export interface RenderElementConfig {
  extendRenderElement?: Array<{
    type: string;
    renderElement: (props: RenderElementProps) => Element;
  }>;
}
const useRenderElement = (config?: RenderElementConfig) => {
  //渲染自定义元素
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
        case CustomElementType.MENTION: {
          return <MentionNode {...restProps}>{children}</MentionNode>;
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
  //渲染叶子节点
  const renderLeaf = useCallback(({ attributes, children, leaf }: RenderLeafProps) => {
    return (
      <span
        {...attributes}
        style={{
          fontWeight: leaf.bold ? 'bold' : 'normal',
          // fontStyle: leaf?.italic ? 'italic' : 'normal',
        }}
      >
        {children}
      </span>
    );
  }, []);
  return {
    renderElement,
    renderLeaf,
  };
};
export default useRenderElement;
