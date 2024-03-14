import { cloneElement, CSSProperties, ReactElement } from 'react';
import { ClassNames } from '@wzx-unreal/react-hooks';

export const extendElement = (
  element: ReactElement,
  extProps: {
    className?: string;
    style?: CSSProperties;
  }
) => {
  return cloneElement(element, {
    className: ClassNames(extProps.className, element.props?.className),
    style: {
      ...extProps.style,
      ...element.props?.style,
    },
  });
};
