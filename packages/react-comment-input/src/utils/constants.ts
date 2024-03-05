import { CustomElement, CustomElementType } from '@/types';

export const emptySlateValue: CustomElement[] = [
  {
    type: CustomElementType.DEFAULT,
    children: [{ text: '' }],
  },
];
