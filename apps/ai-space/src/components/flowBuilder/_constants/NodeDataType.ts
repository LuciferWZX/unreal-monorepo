import { CustomFlowNodeType } from './index.ts';

export interface BaseNodeDataType<T = CustomFlowNodeType> {
  id: string;
  type: T;
  title: string;
}
