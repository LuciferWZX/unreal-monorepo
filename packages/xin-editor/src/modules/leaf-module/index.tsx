import { CSSProperties, FC } from 'react';
import { RenderLeafProps } from 'slate-react';
import cn from 'classnames';
import './index.css';
const LeafModule: FC<RenderLeafProps> = (props) => {
  const { attributes, leaf, children } = props;
  const classes = cn('wu-leaf-node', {
    'wu-font-bold': leaf.bold,
    'wu-underline': leaf.underline,
    'wu-italic': leaf.italic,
    'wu-keyword-highlight': leaf.highlight,
  });
  const styles: CSSProperties = {
    color: leaf.color,
  };
  return (
    <span style={styles} className={classes} {...attributes}>
      {children}
    </span>
  );
};
export default LeafModule;
