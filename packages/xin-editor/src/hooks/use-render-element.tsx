import { useCallback } from 'react';
import { RenderElementProps, RenderPlaceholderProps } from 'slate-react/dist/components/editable';
import { match } from 'ts-pattern';
import { CustomElementType } from '@/types';
import { BoldModule, CheckListModule, CodeModule, LeafModule, ParagraphModule } from '@/modules';
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
      .with(CustomElementType.CheckList, () => {
        return <CheckListModule {...restProps}>{children}</CheckListModule>;
      })
      .otherwise(() => {
        return <ParagraphModule {...restProps}>{children}</ParagraphModule>;
      });
  }, []);
  const renderLeaf = useCallback((props: RenderLeafProps) => {
    const { children, ...restProps } = props;
    return <LeafModule {...restProps}>{children}</LeafModule>;
  }, []);
  const renderPlaceholder = useCallback((props: RenderPlaceholderProps) => {
    const { children, attributes } = props;
    return (
      <span {...attributes} style={{ fontStyle: 'italic', color: 'gray', position: 'absolute' }}>
        {children}
      </span>
    );
  }, []);
  return { renderElement, renderLeaf, renderPlaceholder };
};
export default useRenderElement;
