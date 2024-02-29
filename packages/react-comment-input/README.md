# react-comment-input 使用指南

`react-comment-input` 是一个类似飞书输入框的 React的输入组件，用于显示欢迎消息。

## 自定义组件
先定义一个自定义组件的数据格式
```ts
interface UserElement {
  type:'user',
  username:string
  children: [{ text: any }]
}

/**
 * type和children属性是固定的,children是个数组里面可嵌套，但是必须要有个，
 * 一般 {text:""}默认
 */
const userNode: UserElement = {
  type: 'user',
  username: 'wzx',
  children: [{ text: 'wzx' }]
}
```
再定一个UserNode的自定义组件用于在输入框中显示
```tsx
import { FC } from 'react'
import { RenderElementProps } from '@unreal/react-comment-input/lib/types/types'
const UserNode: FC<RenderElementProps> = (props) => {
  /**
   * 这里的children就是UserElement的children
   */
  const { attributes, element, children } = props
  const el: { username: string } = element as UserElement
  return (
    <span
      {...attributes}
      contentEditable={false}
      style={{ padding: '2px 5px', margin: '0 2px', background: 'orange' }}
    >
      {el.username}
      {children}
    </span>
  )
}
export default UserNode
```
接着在ReactCommentInput传入一些属性
1. `extendRenderElement`这里必须传入对应的类型，以及该类型需要渲染的组件（照我的就可以）
2. `htmlToSlateConfigOptions`将html转成编辑器的数据格式比如`<user user-data="batman"></user>`,当编辑器遇到这个html的时候会解析他，这边我是做了判断如果在`<user>`这个标签上有`user-data`属性则说明是我自定义的属性，否则就使普通的类型，这边都可以自己去写逻辑
3. `slateToDomConfigOptions`将编辑器的数据格式转成html 
`elementAttributeTransform` 这个属性是用来将自定的数据格式通过这个方法转成html的数据。
`elementMap` 这个属性是用来将自定的数据格式的`type`转化为对应的html的标签这边我转为了`<user></user>`标签
4. `isInlineElementTypes`用来标记是行内元素
5. `isVoidElementTypes`"void"节点是 Slate 中的一个特殊概念，表示一个不能被编辑或只能以特殊方式编辑的节点。例如，你可能希望在编辑器中插入一个图像，这个图像是一个节点，但用户不能像编辑文本那样编辑它——它是一个"void"节
```tsx
  <ReactCommentInput
    renderElementConfig={{
      extendRenderElement: [
        {
          type: 'user',
          renderElement: ({ children, ...rest }) => {
            return <UserNode {...rest}>{children}</UserNode>
          }
        }
      ],
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
  />
```