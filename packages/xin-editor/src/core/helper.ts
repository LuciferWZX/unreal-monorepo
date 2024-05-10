import { Descendant } from 'slate';
import { CustomElementType } from '@/types';

/**
 * 生成默认的content
 */
export function getDefaultContent(): Descendant[] {
  return [
    {
      type: CustomElementType.Paragraph,
      children: [{ text: '' }],
    },
  ];
}
