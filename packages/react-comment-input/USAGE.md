## ReactCommentInput

带节点的输入框属性。

### 属性

| 属性                           | 类型                             | 默认值 | 描述                       |
|------------------------------|--------------------------------|-----|--------------------------|
| `value`                      | string                         | `-` | 初始值                      |
| `onChange`                   | (html: string) => void         | `-` | 值改变                      |
| `renderElementConfig`        | RenderElementConfig            | `-` | 自定义组件配置                  |
| `htmlToSlateConfigOptions`   | HtmlToSlateConfigOptions       | `-` | 将html转为slate值配置          |
| `slateToDomConfigOptions`    | SlateToDomConfigOptions        | `-` | 将slate值转为html配置          |
| `colorSchema`                | ColorSchema                    | `-` | 该组件颜色简单的配置               |
| `isInlineElementTypes`       | string[]                       | `-` | `isInline`类型的自定义组件       |
| `isVoidElementTypes`         | string[]                       | `-` | `isVoid`类型的自定义组件         |
| `isMarkableVoidElementTypes` | string[]                       | `-` | `isMarkableVoid`类型的自定义组件 |
| `onSelectionChange`          | (selection: Selection) => void | `-` | 光标发生改变的时候触发              |
| `mentions`                   | MentionConfig[]                | `-` | 提及的配置项                   |
| `mentionContainer`           | MentionContainerProps[]        | `-` | 提及时候的弹窗的配置项              |
| `theme`                      | `dark & light`                 | `-` | 主题                       |

### 例子(tips:该组件为非受控组件！！！)

```tsx
<ReactCommentInput
  value="Alice"
  onChange={html=>{
    console.log("改变的值:",html)
  }}
/>
```
## renderElementConfig
#### `RenderElementConfig`
| 属性                    | 类型                                                                                 | 默认值 | 描述   |
|-----------------------|------------------------------------------------------------------------------------|-----|------|
| `extendRenderElement` | Array<{type: string;renderElement: (props: RenderCustomElementProps) => Element;}> | `-` | 组件类型 |

| 属性              | 类型                                           | 默认值 | 描述    |
|-----------------|----------------------------------------------|-----|-------|
| `type`          | string                                       | `-` | 组件类型  |
| `renderElement` | (props: RenderCustomElementProps) => Element | `-` | 渲染的节点 |
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
    ]
  }}
/>
```


## htmlToSlateConfigOptions
#### `HtmlToSlateConfigOptions`
| 属性                      | 类型        | 默认值 | 描述                                                                      |
|-------------------------|-----------|-----|-------------------------------------------------------------------------|
| `elementTags`           | `ItagMap` | `-` | 参考 [slate-serializers](https://github.com/thompsonsj/slate-serializers) |
| `textTags`              | `ItagMap` | `-` | 参考 上方                                                                   |
| `filterWhitespaceNodes` | `boolean` | `-` | 参考 上方                                                                   |
| `convertBrToLineBreak`  | `boolean` | `-` | 参考 上方                                                                   |
| `trimWhiteSpace`        | `boolean` | `-` | 参考 上方                                                                   |
```tsx
const config = {
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
}
<ReactCommentInput
  {...config}
/>
```



## slateToDomConfigOptions
#### `SlateToDomConfigOptions`
| 属性                             | 类型                                                       | 默认值       | 描述                                                                      |
|--------------------------------|----------------------------------------------------------|-----------|-------------------------------------------------------------------------|
| `elementAttributeTransform`    | (props: { node: any; attrs: any }) => AttributeTransform | undefined | `-`                                                                     | 参考 [slate-serializers](https://github.com/thompsonsj/slate-serializers) |
| `elementTransforms`            | ElementTransforms                                        | `-`       | 参考 [slate-serializers](https://github.com/thompsonsj/slate-serializers) |
| `markMap`                      | Record<string, string[]>                                 | `-`       | 参考 上方                                                                   |
| `elementMap`                   | Record<string, string>                                   | `-`       | 参考 上方                                                                   |
| `encodeEntities`               | `boolean`                                                | `-`       | 参考 上方                                                                   |
| `alwaysEncodeBreakingEntities` | `boolean`                                                | `-`       | 参考 上方                                                                   |
| `alwaysEncodeCodeEntities`     | `boolean`                                                | `-`       | 参考 上方                                                                   |
| `convertLineBreakToBr`         | `boolean`                                                | `-`       | 参考 上方                                                                   |
```tsx
const config = {
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
}
<ReactCommentInput
  {...config}
/>
```