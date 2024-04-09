import { CSSProperties, FC, forwardRef, HTMLAttributes, ReactNode } from 'react';
import './index.css';
import { cn } from '@/utils';
import { Command, CommandList } from '@/components/command';
import { ScrollArea } from '@/components';
interface TreeContainerProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  height?: number;
  width?: number;
}
const TreeContainer: FC<TreeContainerProps> = (props) => {
  const { className, style, height, width, children } = props;
  const classes = cn('jb-tree-container', className);
  return (
    <Command>
      <CommandList style={style} className={classes}>
        <ScrollArea style={{ height: height, width: width }}>{children}</ScrollArea>
      </CommandList>
    </Command>
  );
};
export default TreeContainer;
