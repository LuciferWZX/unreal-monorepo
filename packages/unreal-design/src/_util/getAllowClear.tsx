import { BaseInputProps } from 'rc-input/lib/interface';
import { CircleX } from 'lucide-react';

export type AllowClear = BaseInputProps['allowClear'];

const getAllowClear = (allowClear: AllowClear): AllowClear => {
  let mergedAllowClear: AllowClear;
  if (typeof allowClear === 'object' && allowClear?.clearIcon) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: <CircleX className={'unreal-w-3 unreal-h-3'} />,
    };
  }

  return mergedAllowClear;
};

export default getAllowClear;
