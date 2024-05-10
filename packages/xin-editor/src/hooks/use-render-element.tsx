import { useCallback } from 'react';
import { RenderElementProps } from 'slate-react/dist/components/editable';
import { match } from 'ts-pattern';
import { CustomElementType } from '@/types';
import { BoldModule, CodeModule, LeafModule, ParagraphModule } from '@/modules';
import { RenderLeafProps } from 'slate-react';

const useRenderElement = () => {
  const renderElement = useCallback((props: RenderElementProps) => {
    const { children, ...restProps } = props;
    const _elementType = props.element.type;
    return match(_elementType)
      .with(CustomElementType.Bold, () => {
        return <BoldModule {...restProps}>{children}</BoldModule>;
      })
      .with(CustomElementType.Code, () => {
        return <CodeModule {...restProps}>{children}</CodeModule>;
      })
      .otherwise(() => {
        return <ParagraphModule {...restProps}>{children}</ParagraphModule>;
      });
  }, []);
  const renderLeaf = useCallback((props: RenderLeafProps) => {
    const { children, ...restProps } = props;
    return <LeafModule {...restProps}>{children}</LeafModule>;
  }, []);
  return { renderElement, renderLeaf };
};
export default useRenderElement;
