import { CSSProperties, FC, forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils';
import { CommandItem } from '@/components/command';
interface TreeItemProps {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
  indent?: number;
}
const ThreeItem: FC<TreeItemProps> = (props) => {
  const { className, style, children } = props;
  const _classes = cn('jb-group', 'jb-tree-item', className);
  return (
    <CommandItem className={_classes} style={style}>
      <div style={{ paddingLeft: props.indent }} className={'jb-tree-item-children'}>
        {children}
      </div>
    </CommandItem>
  );
};
export default ThreeItem;
