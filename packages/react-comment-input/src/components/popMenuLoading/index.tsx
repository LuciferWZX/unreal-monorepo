import { CSSProperties, FC } from 'react';
import './index.less';
interface LoadingProps {
  text?: string;
  className?: string;
  theme?: 'dark' | 'light';
  style?: CSSProperties;
}
const PopMenuLoading: FC<LoadingProps> = (props) => {
  const { text, theme, style } = props;
  const darkColorSchema = {
    '--item-text-color': 'rgba(255, 255, 255, 0.85)',
  };
  const colorSchema = theme === 'dark' ? darkColorSchema : {};

  return (
    <div style={{ ...colorSchema, ...style }} className={'pop-menu-loading'}>
      {text ?? 'loading...'}
    </div>
  );
};
export default PopMenuLoading;
