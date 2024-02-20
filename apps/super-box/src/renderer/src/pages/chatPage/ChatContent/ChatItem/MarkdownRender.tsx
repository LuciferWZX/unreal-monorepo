import { FC } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
interface IProps {
  content: string
}
const MarkdownRender: FC<IProps> = (props) => {
  const { content } = props
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          // eslint-disable-next-line react/prop-types
          const { children, className, ...rest } = props
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SyntaxHighlighter {...rest} PreTag="div" language={match[1]} style={dark}>
              {String(children).replace('\n', '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        }
      }}
    >
      {content}
    </Markdown>
  )
}
export default MarkdownRender
