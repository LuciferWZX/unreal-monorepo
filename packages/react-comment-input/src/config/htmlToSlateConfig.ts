import { getAttributeValue } from 'domutils';
import { extractCssFromStyle } from '@slate-serializers/dom';
import { Config } from '@slate-serializers/html/src/lib/serializers/htmlToSlate/config/types';
import { Element } from 'domhandler';
import { CustomElementType, MentionElement } from '@/types';

interface ItagMap {
  [key: string]: (a?: Element) => object;
}
export interface HtmlToSlateConfigOptions {
  elementTags?: ItagMap;
  textTags?: ItagMap;
  filterWhitespaceNodes?: boolean;
  convertBrToLineBreak?: boolean;
  trimWhiteSpace?: boolean;
}
const htmlToSlateConfig = (config?: HtmlToSlateConfigOptions): Config => {
  const defaultConfig: Config = {
    elementAttributeTransform: ({ el }) => {
      const attrs: { [key: string]: string } = {};
      const elementStyleMap: { [key: string]: string } = {
        align: 'textAlign',
      };
      Object.keys(elementStyleMap).forEach((slateKey) => {
        const cssProperty = elementStyleMap[slateKey];
        const cssValue = extractCssFromStyle(el, cssProperty);
        if (cssValue) {
          attrs[slateKey] = cssValue;
        }
      });
      return attrs;
    },
    elementTags: {
      a: (el) => ({
        type: 'link',
        newTab: el && getAttributeValue(el, 'target') === '_blank',
        url: el && getAttributeValue(el, 'href'),
      }),
      mention: (_el) => {
        if (_el) {
          const { attribs } = _el;
          try {
            if (attribs['mention-data']) {
              return {
                type: CustomElementType.MENTION,
                trigger: attribs['mention-trigger'],
                data: JSON.parse(attribs['mention-data']),
              } as MentionElement;
            }
          } catch (e) {
            console.error(e);
          }
        }
        return {
          type: 'span',
        };
      },
      blockquote: () => ({ type: 'blockquote' }),
      div: () => ({ type: 'default' }),
      span: (_element) => {
        // if (element) {
        //   const attribs = element?.attribs ?? {};
        //   if (attribs['data-type'] && attribs['data-name'] && attribs['data-sn']) {
        //     return {
        //       type: 'indicator',
        //       aggType: Number(attribs['data-type']),
        //       aggName: attribs['data-name'],
        //       aggSn: attribs['data-sn'],
        //     };
        //   }
        // }
        return { type: 'span' };
      },
      // span:()=>({type:'span'}),
      // indicator:()=>({type:'indicator'}),
      h1: () => ({ type: 'h1' }),
      h2: () => ({ type: 'h2' }),
      h3: () => ({ type: 'h3' }),
      h4: () => ({ type: 'h4' }),
      h5: () => ({ type: 'h5' }),
      h6: () => ({ type: 'h6' }),
      li: () => ({ type: 'li' }),
      ol: () => ({ type: 'ol' }),
      p: () => ({ type: 'p' }),
      ul: () => ({ type: 'ul' }),
    },
    textTags: {
      code: () => ({ code: true }),
      pre: () => ({ code: true }),
      del: () => ({ strikethrough: true }),
      em: () => ({ italic: true }),
      i: () => ({ italic: true }),
      s: () => ({ strikethrough: true }),
      strong: () => ({ bold: true }),
      u: () => ({ underline: true }),
    },
    htmlPreProcessString: (html) =>
      html.replace(/<pre[^>]*>/g, '<code>').replace(/<\/pre>/g, '</code>'),
    filterWhitespaceNodes: true,
    convertBrToLineBreak: true,
    trimWhiteSpace: true,
  };
  const mergedConfig: Config = {
    elementAttributeTransform: defaultConfig.elementAttributeTransform,
    elementTags: {
      ...defaultConfig.elementTags,
      ...config?.elementTags,
    },
    textTags: {
      ...defaultConfig.textTags,
      ...config?.textTags,
    },
    filterWhitespaceNodes: config?.filterWhitespaceNodes ?? defaultConfig?.filterWhitespaceNodes,
    convertBrToLineBreak: config?.convertBrToLineBreak ?? defaultConfig?.convertBrToLineBreak,
    trimWhiteSpace: config?.trimWhiteSpace ?? defaultConfig?.trimWhiteSpace,
  };
  return mergedConfig;
};
export default htmlToSlateConfig;
