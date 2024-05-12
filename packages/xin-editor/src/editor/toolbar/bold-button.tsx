import { FC, useMemo } from 'react';
import { Button } from 'antd';
import { Bold } from 'lucide-react'
import './index.css'
import cn from 'classnames';
import { ReactEditor, useSlateSelector, useSlateStatic } from 'slate-react';
import EditorCommand from '@/core/command';

const BoldButton:FC = () => {
  const isBoldActive = useSlateSelector(editor => EditorCommand.isBoldMarkActive(editor))
  const editor = useSlateStatic()
  const type = useMemo(()=>{
    if (isBoldActive){
      return "primary"
    }
    return "text"
  },[isBoldActive])
  return(
    <Button
      type={type}
      onClick={()=>{
        EditorCommand.toggleBoldMark(editor)
        ReactEditor.focus(editor)
      }}
      className={cn('wu_toolbar_icon_btn')}
      icon={<Bold className={cn('wu_toolbar_icon_btn_icon')} />} />
  )
}
export default BoldButton
