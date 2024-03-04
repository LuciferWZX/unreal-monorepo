import { RenderCustomElementProps } from '@unreal/react-comment-input'
import { FC } from 'react'
const UserNode: FC<RenderCustomElementProps> = (props) => {
  const { attributes, element, children, mode } = props

  const el: { username: string } = element as any
  return (
    <span
      {...attributes}
      contentEditable={false}
      style={{
        padding: '2px 5px',
        margin: '0 2px',
        background: mode === 'preview' ? 'red' : 'orange'
      }}
    >
      {el.username}
      {children}
    </span>
  )
}
export default UserNode
