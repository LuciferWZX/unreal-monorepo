import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { LucideProps } from 'lucide-react';
import { lazy, Suspense } from 'react';

const fallback = <div style={{ background: 'transparent', width: 24, height: 24 }} />;
type IconName = keyof typeof dynamicIconImports;
interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
}
const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);
  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
};
export { Icon, IconName };
