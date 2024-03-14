import { DialogProps } from '@radix-ui/react-dialog';
interface CommandDialogProps extends DialogProps {
    container?: HTMLElement | null;
}
declare const CommandDialog: ({ children, container, ...props }: CommandDialogProps) => import("react/jsx-runtime").JSX.Element;
export default CommandDialog;
