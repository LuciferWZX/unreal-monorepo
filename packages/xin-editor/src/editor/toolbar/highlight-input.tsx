import { FC } from 'react';
import { Input } from 'antd';
import useEditorStore from '@/stores/useEditorStore';

const HighlightInput: FC = () => {
  return (
    <Input
      onChange={(e) => {
        const value = e.target.value;
        useEditorStore.setState({ keyword: value ?? '' });
      }}
      allowClear={true}
      placeholder={'请输入'}
    />
  );
};
export default HighlightInput;
