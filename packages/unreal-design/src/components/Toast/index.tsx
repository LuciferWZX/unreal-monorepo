import { useToast } from './useToast';
import ToastProvider from './ToastProvider';
import Toast from './Toast';
import ToastTitle from './ToastTitle';
import ToastDescription from './ToastDescription';
import ToastClose from './ToastClose';
import ToastViewport from './ToastViewport';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="unreal-grid unreal-gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose variant={props.variant} />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
