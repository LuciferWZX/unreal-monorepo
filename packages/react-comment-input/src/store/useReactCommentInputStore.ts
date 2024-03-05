import { PreviewCommentInputProps } from '@/previewCommentInput';
import { create } from 'zustand';

interface ReactCommentInputStoreState {
  //编辑和预览通用的属性设置
  basicProps?: PreviewCommentInputProps;
}
const initialState: ReactCommentInputStoreState = {
  basicProps: undefined,
};
export const useReactCommentInputStore = create<ReactCommentInputStoreState>((set) => ({
  ...initialState,
}));
