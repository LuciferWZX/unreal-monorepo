export interface BaseNodeDataType extends Record<string, unknown> {
  title: string;
  description?: string;
  inputs?: Record<string, string>;
  configs?: BaseNodeConfig;
  outputs?: Record<string, string>;
}
export interface BaseNodeConfig {
  [key: string]: {
    type: BaseNodeConfigItemType;
    label: string;
    key: string;
  };
}
export enum BaseNodeConfigItemType {
  //输入框
  input = 'input',
  //多行文本框
  textarea = 'textarea',
  //复选框
  checkbox = 'checkbox',
  //单选框
  radio = 'radio',
  //下拉框
  select = 'select',
  //多选下拉框
  multipleSelect = 'multipleSelect',
  //滑块
  slider = 'slider',
  //开关
  switch = 'switch',
  //日期
  date = 'date',
  //时间
  time = 'time',
  //日期时间
  dateTime = 'dateTime',
  //颜色
  color = 'color',
  //文件
  file = 'file',
  //图片
  image = 'image',
  //视频
  video = 'video',
  //音频
  audio = 'audio',
  //prompt输入框
  prompt = 'prompt',
}
