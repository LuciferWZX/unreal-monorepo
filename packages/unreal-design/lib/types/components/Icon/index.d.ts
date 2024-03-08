import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { LucideProps } from 'lucide-react';
type IconName = keyof typeof dynamicIconImports;
interface IconProps extends Omit<LucideProps, 'ref'> {
    name: IconName;
}
declare const Icon: ({ name, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element;
export { Icon, IconName };
