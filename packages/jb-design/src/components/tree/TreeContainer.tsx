import {
  CSSProperties,
  FC,
  forwardRef,
  HTMLAttributes,
  KeyboardEventHandler,
  ReactNode,
} from 'react';
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
  value?: string;
  onValueChange?: (value: string) => void;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
}
const TreeContainer: FC<TreeContainerProps> = (props) => {
  const { className, style, onKeyDown, value, onValueChange, height, width, children } = props;
  const classes = cn('jb-tree-container', className);
  return (
    <Command
      disablePointerSelection={true}
      value={value}
      onValueChange={onValueChange}
      className={cn('jb-group/tree', 'jb-outline-none')}
      onKeyDown={onKeyDown}
    >
      <CommandList style={style} className={classes}>
        <ScrollArea style={{ height: height, width: width }}>{children}</ScrollArea>
      </CommandList>
    </Command>
  );
};
export default TreeContainer;
