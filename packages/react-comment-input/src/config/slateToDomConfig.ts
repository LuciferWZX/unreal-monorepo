import { SlateToDomConfig } from '@slate-serializers/dom';
import { Element } from 'domhandler';
import { styleToString } from '@slate-serializers/utilities';
import { AttributeTransform } from '@slate-serializers/html/src/lib/serializers/htmlToSlate/config/types';
import { ElementTransform } from '@slate-serializers/dom/src/lib/config/types';
import { CustomElementType, MentionElement } from '@/types';
interface ElementTransforms {
  [key: string]: ElementTransform;
}
const ELEMENT_NAME_TAG_MAP: Record<string, string> = {
  default: 'div',
  paragraph: 'p',
  mention: 'mention',
  indicator: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  ul: 'ul',
  ol: 'ol',
  li: 'li',
  blockquote: 'blockquote',
};
const MARK_ELEMENT_TAG_MAP: Record<string, string[]> = {
  strikethrough: ['s'],
  bold: ['strong'],
  underline: ['u'],
  italic: ['i'],
  code: ['pre', 'code'],
};
export interface SlateToDomConfigOptions {
  elementAttributeTransform?: (props: { node: any; attrs: any }) => AttributeTransform | undefined;
  elementTransforms?: ElementTransforms;
  markMap?: Record<string, string[]>;
  elementMap?: Record<string, string>;
  encodeEntities?: boolean;
  alwaysEncodeBreakingEntities?: boolean;
  alwaysEncodeCodeEntities?: boolean;
  convertLineBreakToBr?: boolean;
}
const slateToDomConfig = (config?: SlateToDomConfigOptions): SlateToDomConfig => {
  const defaultConfig: SlateToDomConfig = {
    elementAttributeTransform: ({ node }) => {
      const attrs: any = {};
      if (node.align) {
        attrs.style = styleToString({
          ['text-align']: node.align,
        });
      }
      if (node?.type === CustomElementType.MENTION) {
        const { trigger, data } = node as MentionElement;
        attrs['mention-trigger'] = trigger ?? '';
        attrs['mention-data'] = JSON.stringify(data);
      }
      if (config?.elementAttributeTransform) {
        return config.elementAttributeTransform({ node, attrs });
      }
      // if (node?.aggType) {
      //   attrs['data-type'] = node.aggType.toString();
      // }
      // if (node?.aggName) {
      //   attrs['data-name'] = node.aggName;
      // }
      return attrs;
    },
    elementTransforms: {
      quote: ({ children = [] }) => {
        const p = [new Element('p', {}, children)];
        return new Element('blockquote', {}, p);
      },
      span: ({ children = [] }) => {
        const attrs: any = {};
        return new Element(
          'span',
          {
            ...attrs,
          },
          children
        );
      },
      link: ({ node, children = [] }) => {
        const attrs: any = {};
        if (node.newTab) {
          attrs.target = '_blank';
        }
        return new Element(
          'a',
          {
            href: node.url,
            ...attrs,
          },
          children
        );
      },
    },
    markMap: MARK_ELEMENT_TAG_MAP,
    elementMap: ELEMENT_NAME_TAG_MAP,
    encodeEntities: false,
    alwaysEncodeBreakingEntities: true,
    alwaysEncodeCodeEntities: false,
    convertLineBreakToBr: true,
  };
  const mergedConfig: SlateToDomConfig = {
    elementAttributeTransform: defaultConfig.elementAttributeTransform,
    elementTransforms: {
      ...defaultConfig.elementTransforms,
      ...config?.elementTransforms,
    },
    markMap: {
      ...defaultConfig.markMap,
      ...config?.markMap,
    },
    elementMap: {
      ...defaultConfig.elementMap,
      ...config?.elementMap,
    },
    encodeEntities: config?.encodeEntities ?? defaultConfig.encodeEntities,
    alwaysEncodeBreakingEntities:
      config?.alwaysEncodeBreakingEntities ?? defaultConfig.alwaysEncodeBreakingEntities,
    alwaysEncodeCodeEntities:
      config?.alwaysEncodeCodeEntities ?? defaultConfig.alwaysEncodeCodeEntities,
    convertLineBreakToBr: config?.convertLineBreakToBr ?? defaultConfig.convertLineBreakToBr,
  };
  return mergedConfig;
};
export default slateToDomConfig;
