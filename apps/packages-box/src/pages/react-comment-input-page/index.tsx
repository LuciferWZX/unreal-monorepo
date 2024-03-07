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
  console.log("html:",html);
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
        <ReactCommentInput id={'comment-input'} onSelectionChange={()=>{
          console.log("触发了");
        }} theme={'dark'} mentions={[
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
        ]} mentionContainer={{
          container:document.getElementById('comment-input')!,
          position:"bottom"
        }} {...commonConfig} style={{width:'100%'}} ref={ref} value={html} onChange={(v)=>{
          console.log("值改变了",v);
          setHtml(v)
        }} placeholder={'说点什么'}/>
        </Space>
      </div>
    </div>
  )
}
export default ReactCommentInputPage