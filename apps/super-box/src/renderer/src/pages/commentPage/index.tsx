import { Box } from '@renderer/styles'
import { FC, useEffect, useRef, useState } from 'react'
import '@unreal/react-comment-input/lib/style.css'
import {
  ReactCommentInput,
  ReactCommentInputRef,
  CustomElement,
  PreviewEditor,
  ReactCommentInputProps,
  useReactCommentInputStore
} from '@unreal/react-comment-input'
import { Button } from 'antd'
import UserNode from './userNode'
import { delay, useBoolean } from '@unreal/react-hooks'
// `<p><user user-data='xyz' /></br></p>`
const CommentPage: FC = () => {
  const ref = useRef<ReactCommentInputRef>(null)
  const [value, setValue] = useState<string>()
  const [readOnly, { toggle }] = useBoolean(false)
  const getOptions = async (words: string) => {
    await delay(2000)
    return [
      { label: 'wzx', value: 'wzx', extra: 19 },
      { label: 'wzx6', value: 'wzx6' },
      { label: 'wzx2', value: '1wzx2', disabled: true },
      { label: 'wzx112', value: '1wzx122', disabled: true },
      { label: 'wzx3', value: '2wzx3' }
    ].filter((item) => item.label.toLowerCase().startsWith(words.toLowerCase()))
  }
  const commonConfig: ReactCommentInputProps = {
    renderElementConfig: {
      extendRenderElement: [
        {
          type: 'user',
          renderElement: ({ children, ...rest }) => {
            return <UserNode {...rest}>{children}</UserNode>
          }
        }
      ]
    },
    htmlToSlateConfigOptions: {
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
    },
    slateToDomConfigOptions: {
      elementAttributeTransform: ({ node, attrs }) => {
        if (node.type === 'user') {
          attrs['user-data'] = node.username
        }
        return attrs
      },
      elementMap: {
        user: 'user'
      }
    },
    isInlineElementTypes: ['user'],
    isVoidElementTypes: ['user']
  }
  useEffect(() => {
    useReactCommentInputStore.setState({
      basicProps: commonConfig
    })
  }, [commonConfig])
  return (
    <Box
      $isFull={true}
      $position={'relative'}
      $flex={true}
      $flexDirection={'column'}
      style={{ userSelect: 'text' }}
    >
      <div style={{ flexGrow: 1, overflow: 'auto' }}>
        xxx
        <div>
          {useReactCommentInputStore.getState().basicProps && (
            <PreviewEditor style={{ width: '100%' }} value={value} />
          )}
        </div>
      </div>
      <div style={{ padding: 10 }}>
        <Button
          onClick={() => {
            if (ref.current) {
              const {
                // editor,
                // Transforms,
                // ReactEditor,
                actions: { insertNode }
              } = ref.current
              const userNode: CustomElement = {
                type: 'user',
                username: '孙悟空',
                children: [{ text: '孙悟空' }]
              }
              insertNode(userNode)
              // ReactEditor.focus(editor)
              // const userNode: any = {
              //   type: 'user',
              //   username: 'wzx',
              //   children: [{ text: 'wzx' }]
              // }
              // Transforms.insertFragment(editor, [userNode])
              // Transforms.move(editor, { distance: 1 })
              // editor.normalize()
            }
          }}
        >
          插入user节点
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
                actions: { clearHistory }
              } = ref.current
              clearHistory()
            }
          }}
        >
          清空历史
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
        <Button onClick={toggle}>切换</Button>
        <ReactCommentInput
          ref={ref}
          readOnly={readOnly}
          theme="dark"
          mentions={[
            {
              trigger: '@',
              filterKeys: ['label', 'value'],
              options: [
                { label: 'wzx', value: 'wzx', extra: 19 },
                { label: 'wzx6', value: 'wzx6' },
                { label: 'wzx2', value: '1wzx2', disabled: true },
                { label: 'wzx112', value: '1wzx122', disabled: true },
                { label: 'wzx3', value: '2wzx3' }
                // { label: 'wzx4', value: '3wzx4', disabled: true }
              ],
              customElement: (option) => {
                if (option.value === 'wzx') {
                  return {
                    type: 'user',
                    username: option.value,
                    children: [{ text: option.label }]
                  }
                }
                return
              }
            },
            {
              trigger: '!',
              filterKeys: ['label', 'value'],
              options: async (words) => {
                const data = await getOptions(words)
                return data
              },
              customElement: (option) => {
                if (option.value === 'wzx') {
                  return {
                    type: 'user',
                    username: option.value,
                    children: [{ text: option.label }]
                  }
                }
                return
              }
            },
            {
              trigger: '#',
              eclipse: true,
              options: [
                {
                  label:
                    'wxm:时间: 2024年2月28日（周三） 11:00 - 12:00 (GMT+8)wxm:时间: 2024年2月28日（周三） 11:00 - 12:00 (GMT+8)wxm:时间: 2024年2月28日（周三） 11:00 - 12:00 (GMT+8)wxm:时间: 2024年2月28日（周三） 11:00 - 12:00 (GMT+8)',
                  value: 'wxm'
                },
                { label: 'wxm1时间: 2024年2月28日（周三） 11:00 - 12:00 (GMT+8)', value: 'wxm1' },
                { label: 'wxm2时间: 2024年2月28日（周三） 11:00 - 12:00 (GMT+8)', value: 'wxm2' },
                { label: 'wxm3时间: 2024年2月28日（周三） 11:00 - 12:00 (GMT+8)', value: 'wxm3' },
                { label: 'wxm4时间: 2024年2月28日（周三） 11:00 - 12:00 (GMT+8)', value: 'wxm4' },
                { label: 'wxm5', value: 'wxm5' },
                { label: 'wxm6时间: 2024年2月28日（周三） 11:00 - 12:00 (GMT+8)', value: 'wxm6' },
                { label: 'wxm7', value: 'wxm7' },
                { label: 'wxm8时间: 2024年2月28日（周三） 11:00 - 12:00 (GMT+8)', value: 'wxm8' },
                { label: 'wxm9', value: 'wxm9' }
              ],
              customMentionItem: (option, attributes, data, actions) => {
                return (
                  <div
                    data-mention-index={attributes['data-mention-index']}
                    key={option.value}
                    onClick={actions.onClick}
                    className={attributes.className}
                    style={{ background: data.isSelected ? 'orange' : '' }}
                  >
                    ☺{option.label}
                  </div>
                )
              }
            }
          ]}
          mentionContainer={{
            style: { maxWidth: 300 },
            customLoading: <div>加载中...</div>
          }}
          {...commonConfig}
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
