import { Config } from '@slate-serializers/html/src/lib/serializers/htmlToSlate/config/types';
import { Element } from 'domhandler';
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
declare const htmlToSlateConfig: (config?: HtmlToSlateConfigOptions) => Config;
export default htmlToSlateConfig;
