import { FC } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
interface IProps {
  content: string
}
const MarkdownRender: FC<IProps> = (props) => {
  const { content } = props
  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        code(codeProps) {
          const { children, className, ...rest } = codeProps
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SyntaxHighlighter {...rest} PreTag="div" language={match[1]} style={atomDark}>
              {String(children)}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        },
        a: (aProps) => {
          const { children, ...restProps } = aProps
          return (
            <a target={'_blank'} {...restProps}>
              {children}
            </a>
          )
        }
      }}
    >
      {content}
    </Markdown>
  )
}
export default MarkdownRender
