import { FC, useRef } from 'react';
import { ReactEditor, RenderElementProps, useSlateStatic } from 'slate-react';
import { LinkElement } from '../../../custom-slate';
import { Button, Divider, Dropdown, MenuProps, Space, theme, Tooltip } from 'antd';
import cn from 'classnames';
import { ChevronDown, PencilLine, Unlink } from 'lucide-react';
import { delLinks, setLinks } from '@/core';
import { Editor, Node as SlateNode, Transforms } from 'slate';
import { useBoolean } from '@wzx-unreal/react-hooks';
const LinkModule: FC<RenderElementProps> = (props) => {
  const { attributes, element: _element, children } = props;
  const element = _element as LinkElement;
  const linkRef = useRef(null);
  const editor = useSlateStatic();
  const [open, { set: setOpen }] = useBoolean(false);
  const {
    token: { colorPrimaryText },
  } = theme.useToken();
  const { href, view = 'title', disabled } = element;
  const ele = (
    <span {...attributes}>
      {children}
      <span
        className={'ignore-toggle-readonly'}
        data-ignore-slate
        contentEditable={false}
        style={{ userSelect: 'none' }}
      >
        {'\uFEFF'}
      </span>
    </span>
  );
  const tooltipWrapper = (
    <Tooltip
      trigger={['click']}
      open={open}
      onOpenChange={setOpen}
      destroyTooltipOnHide={true}
      arrow={false}
      title={
        <LinkTooltipContent
          close={() => setOpen(false)}
          editor={editor}
          view={view}
          node={element}
        />
      }
    >
      {ele}
    </Tooltip>
  );
  return (
    <a
      ref={linkRef}
      data-link={true}
      data-href={href}
      data-slate-node="element"
      title={href}
      onClick={(e) => {
        e.preventDefault();
      }}
      style={{
        color: colorPrimaryText,
        margin: '0 1px',
      }}
      href={href}
    >
      {tooltipWrapper}
    </a>
  );
};
interface ContentProps {
  editor: Editor;
  view: 'title' | 'href' | 'card' | undefined;
  node: SlateNode;
  close: () => void;
}
const LinkTooltipContent = (props: ContentProps) => {
  const { view, editor, node, close } = props;
  const viewMenu: MenuProps['items'] = [
    {
      label: '标题视图',
      key: 'title',
    },
    {
      label: '链接视图',
      key: 'href',
    },
  ];
  const getViewLabel = () => {
    const menu = viewMenu.find((vm) => vm?.key === view);
    if (menu) {
      return (menu as any)?.label;
    }
    return '--';
  };
  return (
    <Space>
      <Tooltip title={'修改链接'}>
        <Button
          type={'text'}
          className={cn('wu_toolbar_icon_btn')}
          icon={<PencilLine className={cn('wu_toolbar_icon_btn_icon')} />}
        />
      </Tooltip>
      <Tooltip title={'移除链接'}>
        <Button
          type={'text'}
          onClick={() => {
            delLinks(editor, node);
            close();
          }}
          className={cn('wu_toolbar_icon_btn')}
          icon={<Unlink className={cn('wu_toolbar_icon_btn_icon')} />}
        />
      </Tooltip>
      <Divider type={'vertical'} />
      <Dropdown
        menu={{
          items: viewMenu,
          selectable: true,
          selectedKeys: [view ?? ''],
          onClick: ({ key }) => {
            setLinks(editor, node as LinkElement, key as any);
            Transforms.collapse(editor, { edge: 'end' });
            Editor.normalize(editor);
            // ReactEditor.blur(editor);
            ReactEditor.focus(editor);
            close();
          },
        }}
        trigger={['click']}
      >
        <Button type={'text'} className={cn('wu_toolbar_icon_btn')}>
          <Space>
            {getViewLabel()}
            <ChevronDown className={cn('wu_toolbar_icon_btn_icon')} />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  );
};
export default LinkModule;
