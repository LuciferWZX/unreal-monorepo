import * as ResizablePrimitive from 'react-resizable-panels';
import { cn } from '@/utils';
import { ComponentProps } from 'react';
import './index.css';
const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle className={cn('jb-resize-handle', className)} {...props}>
    {withHandle && (
      <div className="jb-z-10 jb-flex jb-h-4 jb-w-3 jb-items-center jb-justify-center jb-rounded-sm jb-border jb-bg-border">
        handle
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);
export default ResizableHandle;
