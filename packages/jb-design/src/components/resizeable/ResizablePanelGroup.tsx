import * as ResizablePrimitive from 'react-resizable-panels';
import { cn } from '@/utils';
import { ComponentProps } from 'react';

const ResizablePanelGroup = ({
  className,
  ...props
}: ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      'jb-flex jb-h-full jb-w-full data-[panel-group-direction=vertical]:jb-flex-col',
      className
    )}
    {...props}
  />
);
export default ResizablePanelGroup;
