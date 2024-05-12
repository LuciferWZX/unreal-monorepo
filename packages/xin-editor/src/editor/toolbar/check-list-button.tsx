import { FC, useMemo } from 'react';
import { Button } from 'antd';
import { ListTodo } from 'lucide-react'
import './index.css'
import cn from 'classnames';
import { ReactEditor, useSlateSelector, useSlateStatic } from 'slate-react';
import EditorCommand from '@/core/command';
const CheckListButton:FC = () => {
  const isCheckListNode = useSlateSelector(editor => EditorCommand.isCheckListNode(editor))
  const editor = useSlateStatic()
  const type = useMemo(()=>{
    if (isCheckListNode){
      return "primary"
    }
    return "text"
  },[isCheckListNode])
  return(
    <Button
      type={type}
      className={cn('wu_toolbar_icon_btn')}
      onClick={()=>{
        EditorCommand.toggleCheckListNode(editor)
        ReactEditor.focus(editor)
      }}
      icon={<ListTodo className={cn('wu_toolbar_icon_btn_icon')} />} />
  )
}
export default CheckListButton
