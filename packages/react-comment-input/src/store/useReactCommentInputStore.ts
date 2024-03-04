import { PreviewEditorProps } from '@/previewEditor';
import { create } from 'zustand';

interface ReactCommentInputStoreState {
  //编辑和预览通用的属性设置
  basicProps?: PreviewEditorProps;
}
const initialState: ReactCommentInputStoreState = {
  basicProps: undefined,
};
export const useReactCommentInputStore = create<ReactCommentInputStoreState>((set) => ({
  ...initialState,
}));
