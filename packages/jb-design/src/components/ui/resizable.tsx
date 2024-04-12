// import { DragHandleDots2Icon } from "@radix-ui/react-icons"
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '@/utils';

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      'jb-flex jb-h-full jb-w-full data-[panel-group-direction=vertical]:jb-flex-col',
      className
    )}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      'jb-relative jb-flex jb-w-px jb-items-center jb-justify-center jb-bg-border after:jb-absolute after:jb-inset-y-0 after:jb-left-1/2 after:jb-w-1 after:jb--translate-x-1/2 focus-visible:jb-outline-none focus-visible:jb-ring-1 focus-visible:jb-ring-ring focus-visible:jb-ring-offset-1 data-[panel-group-direction=vertical]:jb-h-px data-[panel-group-direction=vertical]:jb-w-full data-[panel-group-direction=vertical]:after:jb-left-0 data-[panel-group-direction=vertical]:after:jb-h-1 data-[panel-group-direction=vertical]:after:jb-w-full data-[panel-group-direction=vertical]:after:jb--translate-y-1/2 data-[panel-group-direction=vertical]:after:jb-translate-x-0 [&[data-panel-group-direction=vertical]>div]:jb-rotate-90',
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="jb-z-10 jb-flex jb-h-4 jb-w-3 jb-items-center jb-justify-center jb-rounded-sm jb-border jb-bg-border">
        {/*<DragHandleDots2Icon className="jb-h-2.5 jb-w-2.5" />*/}
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
