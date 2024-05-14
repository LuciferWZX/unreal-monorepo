import { FC, useRef } from 'react';
import { WuEditor } from '@wzx-unreal/xin-editor';
import '@wzx-unreal/xin-editor/lib/style.css';
import { useTheme } from '@wzx-unreal/jb-design';
import { WuEditorRef } from '@wzx-unreal/xin-editor/lib/types/editor/WuEditor';

const WelcomePage: FC = () => {
  const { theme } = useTheme();
  const editorRef = useRef<WuEditorRef>(null);
  return (
    <div className={'ai-w-full ai-h-full ai-flex ai-flex-col'}>
      <WuEditor
        ref={editorRef}
        theme={theme === 'dark' ? 'dark' : 'light'}
        placeholder={'请输入'}
        classes={{
          editor: 'ai-flex-1 ai-overflow-auto',
        }}
      />
    </div>
  );
};
export default WelcomePage;
