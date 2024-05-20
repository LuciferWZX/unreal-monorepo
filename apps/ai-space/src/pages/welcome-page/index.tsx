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
        initialValue={[
          {
            type: 'paragraph',
            children: [
              {
                text: 'Since the editor is based on a recursive tree model, similar to an HTML document, you can create complex nested structures, like tables:',
              },
            ],
          },
          {
            type: 'table',
            children: [
              {
                type: 'table-row',
                children: [
                  {
                    type: 'table-cell',
                    children: [{ text: '' }],
                  },
                  {
                    type: 'table-cell',
                    children: [{ text: 'Human', bold: true }],
                  },
                  {
                    type: 'table-cell',
                    children: [{ text: 'Dog', bold: true }],
                  },
                  {
                    type: 'table-cell',
                    children: [{ text: 'Cat', bold: true }],
                  },
                ],
              },
              {
                type: 'table-row',
                children: [
                  {
                    type: 'table-cell',
                    children: [{ text: '# of Feet', bold: true }],
                  },
                  {
                    type: 'table-cell',
                    children: [{ text: '2' }],
                  },
                  {
                    type: 'table-cell',
                    children: [{ text: '4' }],
                  },
                  {
                    type: 'table-cell',
                    children: [{ text: '4' }],
                  },
                ],
              },
              {
                type: 'table-row',
                children: [
                  {
                    type: 'table-cell',
                    children: [{ text: '# of Lives', bold: true }],
                  },
                  {
                    type: 'table-cell',
                    children: [{ text: '1' }],
                  },
                  {
                    type: 'table-cell',
                    children: [{ text: '1' }],
                  },
                  {
                    type: 'table-cell',
                    children: [{ text: '9' }],
                  },
                ],
              },
            ],
          },
          {
            type: 'paragraph',
            children: [
              {
                text: "This table is just a basic example of rendering a table, and it doesn't have fancy functionality. But you could augment it to add support for navigating with arrow keys, displaying table headers, adding column and rows, or even formulas if you wanted to get really crazy!",
              },
            ],
          },
        ]}
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
