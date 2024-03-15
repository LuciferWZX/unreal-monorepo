// import { ForwardRefExoticComponent, RefAttributes } from 'react';
import RadioGroupItem, { RadioProps } from './Radio';
import UnrealRadioGroup, { UnrealRadioGroupProps } from './RadioGroup';
//
// type CompoundedComponent = ForwardRefExoticComponent<
//   RadioGroupItemProps & RefAttributes<RadioGroupItemRef>
// > & {
//   Group: typeof RadioGroup;
// };
// const Radio = RadioGroupItem as CompoundedComponent;
// Radio.Group = RadioGroup;
// Radio.displayName = 'Radio';
// type RadioProps = RadioGroupItemProps;
// type RadioRef = RadioGroupItemRef;
// export type { RadioProps, RadioRef };
// export default Radio;

import { FC } from 'react';
import { ClassNames } from '@wzx-unreal/react-hooks';
import './index.less';
interface RadioGroupProps extends Omit<UnrealRadioGroupProps, 'children'> {
  options?: RadioProps[];
  direction?: 'vertical' | 'horizontal';
}
const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { options, className, ...restProps } = props;
  return (
    <UnrealRadioGroup
      className={ClassNames(
        {
          'unreal-radio-group-horizontal': props.direction === 'horizontal',
        },
        className
      )}
      {...restProps}
    >
      {options?.map((op) => {
        return <RadioGroupItem {...op} key={op.key || op.value} />;
      })}
    </UnrealRadioGroup>
  );
};
export default RadioGroup;
export type { RadioGroupProps, RadioProps };
