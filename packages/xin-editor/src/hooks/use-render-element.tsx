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
  Table,
  TableCell,
  TableRow,
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
        return (
          <LinkModule {...restProps} attributes={restProps.attributes}>
            {children}
          </LinkModule>
        );
      })
      .with(CustomElementType.Table, () => {
        return (
          <Table {...restProps} attributes={restProps.attributes}>
            {children}
          </Table>
        );
      })
      .with(CustomElementType.TableRow, () => {
        return (
          <TableRow {...restProps} attributes={restProps.attributes}>
            {children}
          </TableRow>
        );
      })
      .with(CustomElementType.TableCell, () => {
        return (
          <TableCell {...restProps} attributes={restProps.attributes}>
            {children}
          </TableCell>
        );
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
