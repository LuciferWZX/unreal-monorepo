import { useCallback } from 'react';
import { RenderElementProps, RenderPlaceholderProps } from 'slate-react/dist/components/editable';
import { match } from 'ts-pattern';
import { CustomElementType } from '@/types';
import {
  CheckListModule,
  CodeModule,
  LeafModule,
  OrderedListModule,
  ParagraphModule,
} from '@/modules';
import { RenderLeafProps } from 'slate-react';
import LinkModule from '@/modules/link-module';

const useRenderElement = () => {
  const renderElement = useCallback((props: RenderElementProps) => {
    const { children, ...restProps } = props;
    const _elementType = props.element.type;
    return match(_elementType)
      .with(CustomElementType.Code, () => {
        return <CodeModule {...restProps}>{children}</CodeModule>;
      })
      .with(CustomElementType.CheckList, () => {
        return <CheckListModule {...restProps}>{children}</CheckListModule>;
      })
      .with(CustomElementType.OrderedList, () => {
        return <OrderedListModule {...restProps}>{children}</OrderedListModule>;
      })
      .with(CustomElementType.Link, () => {
        return <LinkModule {...restProps}>{children}</LinkModule>;
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
      <span
        {...attributes}
        style={{
          color: 'gray',
          position: 'absolute',
          left: 3,
          userSelect: 'none',
          fontStyle: 'normal',
          fontWeight: 'normal',
          textDecoration: 'none',
        }}
      >
        {children}
      </span>
    );
  }, []);
  return { renderElement, renderLeaf, renderPlaceholder };
};
export default useRenderElement;
