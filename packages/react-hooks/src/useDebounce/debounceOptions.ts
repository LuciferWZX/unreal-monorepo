export interface DebounceOptions {
  wait?: number; // 等待时间
  leading?: boolean; // 是否在延迟之前调用
  trailing?: boolean; // 是否在延迟之后调用
  maxWait?: number; // 最大等待时间
}
