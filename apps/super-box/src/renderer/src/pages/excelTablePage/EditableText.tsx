import { FC, useRef, useState } from 'react'
import { Input, InputRef } from 'antd'
import { useBoolean } from '@unreal/react-hooks'
interface IProps {
  text: string | number
  onChange?: (text: string) => void
}

const EditableText: FC<IProps> = (props) => {
  const { text, onChange } = props
  const inputRef = useRef<InputRef>(null)
  const [isEdit, { setFalse, setTrue }] = useBoolean(false)
  const [value, setValue] = useState<string>(text.toString())
  if (isEdit) {
    return (
      <Input
        size={'small'}
        ref={inputRef}
        onPressEnter={() => {
          onChange?.(value)
          setFalse()
        }}
        onBlur={() => {
          setFalse()
        }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        placeholder={'请输入'}
      />
    )
  }
  return (
    <div
      style={{ minHeight: 20 }}
      onDoubleClick={() => {
        setTrue()
        setValue(text.toString())
        setTimeout(() => {
          inputRef.current!.focus({
            cursor: 'end'
          })
        })
      }}
    >
      {text}
    </div>
  )
}
export default EditableText
