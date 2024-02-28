import { Box } from '@renderer/styles'
import { FC, useRef, useState } from 'react'
import '@unreal/react-comment-input/lib/style.css'
import { ReactCommentInput } from '@unreal/react-comment-input'
import { ReactCommentInputRef } from '@unreal/react-comment-input/src/editor'
import { Button } from 'antd'
// `<p><user user-data='xyz' /></br></p>`
const CommentPage: FC = () => {
  const ref = useRef<ReactCommentInputRef>(null)
  const [value, setValue] = useState<string>()
  return (
    <Box $isFull={true} $position={'relative'} $flex={true} $flexDirection={'column'}>
      <div style={{ flexGrow: 1, overflow: 'auto' }}>
        xxx
        <div style={{ height: 2000 }}>aaa</div>
      </div>
      <div style={{ padding: 10 }}>
        <Button
          onClick={() => {
            if (ref.current) {
              const { editor, transforms, ReactEditor } = ref.current
              ReactEditor.focus(editor)
              transforms.insertFragment(editor, [
                {
                  type: 'user',
                  username: 'xxx',
                  children: [{ text: 'xxx' }]
                },
                {
                  text: ' '
                }
              ])
              transforms.move(editor, { distance: 1 })
              editor.normalize()
            }
          }}
        >
          xxx
        </Button>
        <ReactCommentInput
          ref={ref}
          renderElementConfig={{
            extendRenderElement: [
              {
                type: 'user',
                renderElement: ({ children, element, attributes }) => {
                  const el: { username: string } = element as any
                  return (
                    <span {...attributes} contentEditable={false} style={{ background: 'orange' }}>
                      {el.username}
                      {children}
                    </span>
                  )
                }
              }
            ]
          }}
          htmlToSlateConfigOptions={{
            elementTags: {
              user: (_el) => {
                if (_el) {
                  const { attribs } = _el
                  if (attribs['user-data']) {
                    return {
                      type: 'user',
                      username: attribs['user-data']
                    }
                  }
                }
                return {
                  type: 'p'
                }
              }
            }
          }}
          slateToDomConfigOptions={{
            elementAttributeTransform: ({ node, attrs }) => {
              return attrs
            }
          }}
          isInlineElementTypes={['user']}
          isVoidElementTypes={['user']}
          value={value}
          onChange={(v) => {
            console.log(v)
            setValue(v)
          }}
          placeholder={'说点什么'}
        />
      </div>
    </Box>
  )
}
export default CommentPage
