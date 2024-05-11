# react-comment-input 使用指南 

`react-comment-input` 是一个类似飞书输入框的 React的输入组件。
[git仓库](https://github.com/LuciferWZX/unreal-monorepo/tree/master/packages/react-comment-input)

[查看详情](https://github.com/LuciferWZX/unreal-monorepo/blob/master/packages/react-comment-input/USAGE.md)
[组件demo](https://github.com/LuciferWZX/unreal-monorepo/tree/master/apps/packages-box)
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
import { RenderElementProps } from '@wzx-unreal/react-comment-input/lib/types/types'
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
6. `theme`目前支持`dark|light`两种，对应的是`mention`的弹窗样式
```tsx
  <ReactCommentInput
    theme="dark"
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
懒得写了，反正目前只有我在开发哈哈
```tsx
import { FC, useRef, useState } from 'react';
import {
  PreviewCommentInput,
  PreviewCommentInputProps,
  ReactCommentInput,
  ReactCommentInputRef,
} from '@wzx-unreal/react-comment-input';
import '@wzx-unreal/react-comment-input/lib/style.css';
import styles from './index.module.less';
import { Button, Space } from '@arco-design/web-react';
import BookNode, { BookElement } from '@/pages/react-comment-input-page/Nodes/book';
import NumberUtils from '@/utils/number.ts';
import { delay } from '@wzx-unreal/react-hooks';

const ReactCommentInputPage:FC = () => {
  const [html,setHtml]=useState<string|undefined>("")
  const ref = useRef<ReactCommentInputRef>(null)
  const commonConfig:PreviewCommentInputProps = {
    renderElementConfig:{
      extendRenderElement:[
        {
          type:'book',
          renderElement:({children,...rest})=>{
            return <BookNode {...rest}>{children}</BookNode>
          }
        }
      ]
    },
    htmlToSlateConfigOptions:{
      elementTags:{
        book:(_el)=>{
          if (_el){
            const {attribs}=_el
            if(attribs['data-book']){
              try {
                return {
                  type:'book',
                  data:JSON.parse(attribs['data-book'])
                }
              }catch (e) {
                console.error(e)
              }
            }
          }
          return {
            type:'default'
          }
        }
      }
    },
    slateToDomConfigOptions:{
      elementAttributeTransform:({node,attrs})=>{
        if(node.type==='book'){
          const {data}=node as BookElement
          attrs['data-book']=JSON.stringify(data)
        }
        return attrs
      },
      elementMap:{
        book:'book'
      }
    },
    isInlineElementTypes:['book'],
    isVoidElementTypes:['book'],
  }
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
  return(
    <div className={styles.box}>
      <div className={styles.previewBox}>
        预览组件:
        <PreviewCommentInput className={styles.pop} style={{display:'inline-block'}} {...commonConfig} value={html}/>
      </div>
      <div className={styles.innerBox}>
        <Space direction='vertical' style={{width:'100%'}} >
          <Button.Group>
            <Button onClick={()=>{
              if (!ref.current) {
                return
              }
              const {editor,actions:{clear}}=ref.current
              clear(editor)
            }} type='primary' >
              清空
            </Button>
            <Button type='primary' onClick={()=>{
              if (!ref.current) {
                return
              }
              const {editor,actions:{insertNodes}}=ref.current
              const number=NumberUtils.getRandomNumber(1000,9999)
              const name = `超人前传：${NumberUtils.getRandomNumber(1000,9999)}`
              const randomBook:BookElement={
                type:'book',
                data:{
                  number:number,
                  name:name,
                },
                children:[{
                  text:`${name}`
                }]
              }
              insertNodes(editor,[randomBook])
            }}>
              插入节点
            </Button>
            <Button onClick={()=>{
              if (!ref.current) {
                return
              }
              const {editor,actions:{focus,selectAll}}=ref.current
              focus(editor)
              selectAll(editor)
            }} type='primary' >
              全选
            </Button>
            <Button onClick={()=>{
              if (!ref.current) {
                return
              }
              const {editor,actions:{focus,deselect}}=ref.current
              focus(editor)
              deselect(editor)
            }} type='primary' >
              取消全选
            </Button>
            <Button onClick={()=>{
              if (!ref.current) {
                return
              }
              const {editor,actions:{updateValue}}=ref.current
              updateValue(editor,`<book data-book="{&quot;number&quot;:1024,&quot;name&quot;:&quot;超人前传：1021&quot;}">超人前传：1024</book>`)
              // 如果要设置字符串的话要用html标签包裹
              // updateValue(editor,`<div>我是最新设置的值</div>`)
            }} type='primary' >
              设置值
            </Button>
          </Button.Group>
          <ReactCommentInput theme={'dark'} mentions={[
            {
              trigger: '@',
              filterKeys: ['label', 'value'],
              options: [
                { label: 'wzx', value: 'wzx', extra: 19 },
                { label: 'wzx6', value: 'wzx6' },
                { label: 'wzx2', value: '1wzx2', disabled: true },
                { label: 'wzx112', value: '1wzx122', disabled: true },
                { label: 'wzx3', value: '2wzx3' }
              ],
              customElement: (option) => {
                if (option.value === 'wzx') {
                  return {
                    type: 'book',
                    data:{
                      number:10,
                      name:option.label
                    },
                    children: [{ text: option.label }]
                  } as BookElement
                }
                return
              }
            },
            {
              trigger: '!',
              filterKeys: ['label', 'value'],
              //异步获取选项
              options: async (words) => {
                return await getOptions(words)
              },
            },
            //太长内容显示...
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
          ]} {...commonConfig} style={{width:'100%'}} ref={ref} value={html} onChange={setHtml} placeholder={'说点什么'}/>
        </Space>
      </div>
    </div>
  )
}
export default ReactCommentInputPage
```
![img_1.png](img_1.png)

## store 本组件提供配置存储 `useReactCommentInputStore`
使用方法
```tsx
import { useReactCommentInputStore } from '@wzx-unreal/react-comment-input'
```
在预览组件`<PreviewEditor/>`和编辑组件`<ReactCommentInput />` 里面有一些通用的配置
```tsx
    const commonConfig:PreviewEditorProps = {
      isInlineElementTypes,
      isVoidElementTypes,
      isMarkableVoidElementTypes,
      value,
      className,
      style,
      htmlToSlateConfigOptions,
      slateToDomConfigOptions,
      renderElementConfig,
    }
    //你可以
  <PreviewEditor {...commonConfig} {..._others} />
  <ReactCommentInput {...commonConfig} {...others} />
  //也可以
    useEffect(() => {
      useReactCommentInputStore.setState({
        basicProps: commonConfig
      })
    }, [commonConfig])
   const basicProps=useReactCommentInputStore(state=>state.basicProps)
    if (basicProps){
      //这边需要设置完再加载，因为editor初始化的时候需要把一些参数一起配置了这样才能保证自定义组件正确
      //的渲染出来
      return (
        <>
          <PreviewEditor  {..._others} />
          <ReactCommentInput {...others} />
        </>
      )
    }
```

## tips
### 当前的 `<ReactCommentInput />`  是非受控模式，如果要更新里面的值请使用 `ref?.actions.updateValue` 这个方法
