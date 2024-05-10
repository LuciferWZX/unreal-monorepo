import { FC } from 'react';
import { RenderElementProps } from 'slate-react';

const CodeModule: FC<RenderElementProps> = (props) => {
  const { attributes, children } = props;
  return (
    <pre {...attributes}>
      <code>{children}</code>
    </pre>
  );
};
export default CodeModule;
