import { Box } from '@renderer/styles'
import { ReactCodeEditor, ReactCodeEditorRef } from '@wzx-unreal/react-code-editor'
import { FC, useRef } from 'react'

const CodePage: FC = () => {
  const ref = useRef<ReactCodeEditorRef>(null)

  return (
    <Box $isFull={true} $position={'relative'}>
      <ReactCodeEditor
        ref={ref}
        language={'tsx'}
        theme={'dark'}
        completions={[
          { label: 'match', type: 'keyword' },
          { label: 'hello', type: 'variable', info: '(文本)' },
          { label: 'magic', type: 'text', apply: '⠁⭒*.✩.*⭒⠁', detail: 'macro' }
        ]}
        style={{ height: '100%' }}
        height={'100%'}
      />
    </Box>
  )
}
export default CodePage
