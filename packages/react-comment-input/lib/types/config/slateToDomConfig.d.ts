import { SlateToDomConfig } from '@slate-serializers/dom';
import { AttributeTransform } from '@slate-serializers/html/src/lib/serializers/htmlToSlate/config/types';
import { ElementTransform } from '@slate-serializers/dom/src/lib/config/types';
interface ElementTransforms {
    [key: string]: ElementTransform;
}
export interface SlateToDomConfigOptions {
    elementAttributeTransform?: (props: {
        node: any;
        attrs: any;
    }) => AttributeTransform | undefined;
    elementTransforms?: ElementTransforms;
    markMap?: Record<string, string[]>;
    elementMap?: Record<string, string>;
    encodeEntities?: boolean;
    alwaysEncodeBreakingEntities?: boolean;
    alwaysEncodeCodeEntities?: boolean;
    convertLineBreakToBr?: boolean;
}
declare const slateToDomConfig: (config?: SlateToDomConfigOptions) => SlateToDomConfig;
export default slateToDomConfig;
