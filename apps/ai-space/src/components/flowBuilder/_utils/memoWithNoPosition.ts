import { FC, memo } from 'react';
import { isEqual } from '@wzx-unreal/react-hooks';

interface WithPositionProps {
  positionAbsoluteX: number;
  positionAbsoluteY: number;
}
const memoWithNoPosition = <T extends WithPositionProps>(Comp: FC<T>) =>
  memo(Comp, (prevProps, nextProps) => {
    const { positionAbsoluteX: x1, positionAbsoluteY: y1, ...prev } = prevProps;
    const { positionAbsoluteX: x2, positionAbsoluteY: y2, ...next } = nextProps;
    return isEqual(prev, next);
  });
export default memoWithNoPosition;
