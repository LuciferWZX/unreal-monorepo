import TooltipContext from './TooltipContext';
import { FC } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const TooltipProvider: FC<TooltipPrimitive.TooltipProviderProps> = (props) => {
  const { children, ...restProps } = props;
  return <TooltipContext.Provider value={restProps}>{children}</TooltipContext.Provider>;
};
export default TooltipProvider;
