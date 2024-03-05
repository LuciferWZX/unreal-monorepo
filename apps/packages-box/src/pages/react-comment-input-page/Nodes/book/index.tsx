import { CSSProperties, FC } from 'react';
import { RenderCustomElementProps,type CustomElement } from '@wzx-unreal/react-comment-input';

export type BookElement = CustomElement & {
  type: 'book',
  data: {
    number: number,
    name: string
  }
}
const BookNode:FC<RenderCustomElementProps> = (props) => {
  const {attributes,mode,element,children}=props
  const {data}=element as BookElement

  const style:CSSProperties={
    color:mode==='preview'?'orange':'#1677ff',
    fontWeight:'bold',
    padding:'0 2px',
  }
  return(
    <span {...attributes} contentEditable={false} style={style}>
      《{data.name}》
      {children}
    </span>
  )
}
export default BookNode