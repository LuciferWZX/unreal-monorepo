import { CustomEditor, CustomElement, CustomText, RenderCustomElementProps } from '@/types';
declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
declare module 'slate-react' {
  interface CustomReactTypes {
    RenderElementProps: RenderCustomElementProps;
  }
}
