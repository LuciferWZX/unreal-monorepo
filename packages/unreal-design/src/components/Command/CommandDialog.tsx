import { Dialog } from '@/components/Dialog/Dialog';
import DialogContent from '@/components/Dialog/DialogContent';
import Command from './Command';
import { DialogProps } from '@radix-ui/react-dialog';

interface CommandDialogProps extends DialogProps {
  container?: HTMLElement | null;
}

const CommandDialog = ({ children, container, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent
        container={container}
        className="unreal-overflow-hidden unreal-p-[0px] unreal-bg-amber-200"
      >
        <Command className="[&_[cmdk-group-heading]]:unreal-px-2 [&_[cmdk-group-heading]]:unreal-font-medium [&_[cmdk-group-heading]]:unreal-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:unreal-pt-0 [&_[cmdk-group]]:unreal-px-2 [&_[cmdk-input-wrapper]_svg]:unreal-h-5 [&_[cmdk-input-wrapper]_svg]:unreal-w-5 [&_[cmdk-input]]:unreal-h-12 [&_[cmdk-item]]:unreal-px-2 [&_[cmdk-item]]:unreal-py-3 [&_[cmdk-item]_svg]:unreal-h-5 [&_[cmdk-item]_svg]:unreal-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};
export default CommandDialog;
