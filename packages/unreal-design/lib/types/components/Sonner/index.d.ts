/// <reference types="react" />
import { Toaster as Sonner, toast } from 'sonner';
type ToasterProps = React.ComponentProps<typeof Sonner>;
declare const Toaster: ({ ...props }: ToasterProps) => import("react/jsx-runtime").JSX.Element;
export { Toaster, toast };
