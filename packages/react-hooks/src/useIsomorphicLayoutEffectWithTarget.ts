import useEffectWithTarget from './useEffectWithTarget';
import {isBrowser} from "@/utils";
import useLayoutEffectWithTarget from "@/useLayoutEffectWithTarget";

const useIsomorphicLayoutEffectWithTarget = isBrowser
  ? useLayoutEffectWithTarget
  : useEffectWithTarget;

export default useIsomorphicLayoutEffectWithTarget;
