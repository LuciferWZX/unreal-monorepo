import { FC, useMemo, useState } from 'react';
import {
  Button,
  ColorPicker,
  ColorPickerProps,
  ConfigProvider,
  Divider,
  GetProp,
  theme,
} from 'antd';
import { cyan, generate, green, presetPalettes, red, gray, yellow } from '@ant-design/colors';
import cn from 'classnames';
import { Brush } from 'lucide-react';
import EditorCommand from '@/core/command';
import { useSlateSelector, useSlateStatic } from 'slate-react';
import { Color } from '@/types';

type Presets = Required<ColorPickerProps>['presets'][number];
const genPresets = (presets = presetPalettes) =>
  Object.entries(presets).map<Presets>(([label, colors]) => ({
    label,
    colors,
  }));
const FontColorButton: FC = () => {
  const isColorActive = useSlateSelector((editor) => EditorCommand.isColorMarkActive(editor));
  const [color, setColor] = useState<Color | undefined>(undefined);
  const editor = useSlateStatic();
  const bgColor = useMemo<string | undefined>(
    () =>
      color === undefined ? undefined : typeof color === 'string' ? color : color!.toHexString(),
    [color]
  );
  const { token } = theme.useToken();
  const type = useMemo(() => {
    if (isColorActive) {
      return 'primary';
    }
    return 'text';
  }, [isColorActive]);
  const presets = genPresets({
    gray,
    yellow,
    primary: generate(token.colorPrimary),
    red,
    green,
    cyan,
  });
  const iconClasses = cn('wu_toolbar_icon_btn_icon');
  return (
    <ConfigProvider>
      <ColorPicker
        presets={presets}
        panelRender={customPanelRender}
        trigger={'hover'}
        value={color}
        styles={{ popupOverlayInner: { width: 480 } }}
        onChange={setColor}
      >
        <Button
          type={type}
          className={cn('wu_toolbar_icon_btn', '!wu-px-[4px]')}
          onClick={() => {
            EditorCommand.toggleColorMark(editor, bgColor);
          }}
          icon={<Brush className={iconClasses} />}
        >
          <div className={cn('wu_font_color_display')} style={{ backgroundColor: bgColor }} />
        </Button>
      </ColorPicker>
    </ConfigProvider>
  );
};
const customPanelRender: ColorPickerProps['panelRender'] = (
  _,
  { components: { Picker, Presets } }
) => (
  <div className={cn('wu-flex wu-h-[200px]')}>
    <div className={cn('wu-flex-1 wu-overflow-auto')}>
      <Presets />
    </div>
    <Divider type="vertical" style={{ height: 'auto' }} />
    <div className={cn('wu-flex-1')}>
      <Picker />
    </div>
  </div>
);
export default FontColorButton;
