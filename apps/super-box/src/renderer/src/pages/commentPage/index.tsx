import { Box } from '@renderer/styles'
import { FC, useRef, useState } from 'react'
import '@unreal/react-comment-input/lib/style.css'
import { ReactCommentInput, ReactCommentInputRef } from '@unreal/react-comment-input'
import { Button } from 'antd'
import UserNode from './userNode'
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
              const { editor, Transforms, ReactEditor } = ref.current
              ReactEditor.focus(editor)
              const userNode: any = {
                type: 'user',
                username: 'wzx',
                children: [{ text: 'wzx' }]
              }
              Transforms.insertFragment(editor, [userNode])
              Transforms.move(editor, { distance: 1 })
              editor.normalize()
            }
          }}
        >
          xxx
        </Button>
        <Button
          onClick={() => {
            if (ref.current) {
              const {
                actions: { clear }
              } = ref.current
              clear()
            }
          }}
        >
          清空
        </Button>
        <Button
          onClick={() => {
            if (ref.current) {
              const {
                actions: { focus }
              } = ref.current
              focus('start')
            }
          }}
        >
          聚焦开始
        </Button>
        <Button
          onClick={() => {
            if (ref.current) {
              const {
                actions: { focus }
              } = ref.current
              focus('end')
            }
          }}
        >
          聚焦结束
        </Button>
        <Button
          onClick={() => {
            if (ref.current) {
              const {
                editor,
                ReactEditor,
                actions: { selectedAll }
              } = ref.current
              ReactEditor.focus(editor)
              selectedAll()
            }
          }}
        >
          全选
        </Button>
        <ReactCommentInput
          ref={ref}
          mentions={[
            {
              trigger: '@',
              filterKeys: ['label', 'value'],
              options: [
                { label: 'wzx', value: 'wzx' },
                { label: 'wzx2', value: '1wzx2' },
                { label: 'wzx3', value: '2wzx3' },
                { label: 'wzx4', value: '3wzx4' }
              ]
            },
            {
              trigger: '#',
              options: [
                { label: 'wxm', value: 'wxm' },
                { label: 'wxm1', value: 'wxm1' },
                { label: 'wxm2', value: 'wxm2' },
                { label: 'wxm3', value: 'wxm3' }
              ]
            }
          ]}
          renderElementConfig={{
            extendRenderElement: [
              {
                type: 'user',
                renderElement: ({ children, ...rest }) => {
                  return <UserNode {...rest}>{children}</UserNode>
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
                  type: 'span'
                }
              }
            }
          }}
          slateToDomConfigOptions={{
            elementAttributeTransform: ({ node, attrs }) => {
              if (node.type === 'user') {
                attrs['user-data'] = node.username
              }
              return attrs
            },
            elementMap: {
              user: 'user'
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
