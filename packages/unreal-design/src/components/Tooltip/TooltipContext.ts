import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { createContext } from 'react';
export interface TooltipContextType
  extends Omit<TooltipPrimitive.TooltipProviderProps, 'children'> {}
const TooltipContext = createContext<TooltipContextType | null>(null);
export default TooltipContext;
