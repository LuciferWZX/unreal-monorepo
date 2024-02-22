import { Box } from '@renderer/styles'
import { ReactCodeEditor } from '@unreal/react-code-editor'
import { FC } from 'react'

const CodePage: FC = () => {
  // options: [

  // ]
  return (
    <Box $isFull={true} $position={'relative'}>
      <ReactCodeEditor
        language={'tsx'}
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
