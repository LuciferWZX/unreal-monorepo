import { FC } from 'react';
import { RenderLeafProps } from 'slate-react';
import cn from 'classnames';
const LeafModule: FC<RenderLeafProps> = (props) => {
  const { attributes, leaf, children } = props;
  const classes = cn({
    'wu-font-bold': leaf.bold,
    'bg-red': true,
  });
  return (
    <span className={classes} {...attributes}>
      {children}
    </span>
  );
};
export default LeafModule;
