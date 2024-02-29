import {
  Dispatch,
  ForwardedRef,
  KeyboardEvent,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Editor, Range, Transforms } from 'slate';
import { MentionConfig, MentionOption } from '@/editor';
import { isNumber, isString, useBoolean } from '@unreal/react-hooks';
import { ReactEditor } from 'slate-react';
import Portal from '@/components/portal';
import PopMenu from '@/components/popMenu';
import PopMenuItem from '@/components/popMenuItem';
import { CustomElementType, MentionElement } from '@/types';

interface MentionValuesType {
  target: Range | undefined;
  index: number;
  search: string;
  ref: ForwardedRef<HTMLDivElement>;
  popOpen: boolean;
  popMenu: ReactNode | null;
  options: Array<MentionOption | unknown>;
}
interface MentionActionsType {
  setTarget: Dispatch<SetStateAction<Range | undefined>>;
  setIndex: Dispatch<SetStateAction<number>>;
  setSearch: Dispatch<SetStateAction<string>>;
  setMention: Dispatch<SetStateAction<MentionConfig | undefined>>;
  setPopOpen: (open: boolean) => void;
  onMentionKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
}
const useMention = (editor: Editor): [MentionValuesType, MentionActionsType] => {
  const [open, { set }] = useBoolean(false);
  const [target, setTarget] = useState<Range | undefined>(undefined);
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [mention, setMention] = useState<MentionConfig | undefined>(undefined);
  const ref = useRef<HTMLDivElement | null>(null);
  const options = useMemo(() => {
    if (mention) {
      const { options, filterKeys } = mention;
      return options.filter((item) => {
        if (filterKeys) {
          let flag = false;
          for (let i = 0; i < filterKeys.length; i++) {
            const key = filterKeys[i];
            const v = item[key];
            if (isNumber(v) || isString(v)) {
              const strValue = v.toString();
              if (strValue.toLowerCase().startsWith(search.toLowerCase())) {
                flag = true;
                break;
              }
            }
          }
          return flag;
        }
        return item.label.toLowerCase().startsWith(search.toLowerCase());
      });
    }
    return [];
  }, [mention, search]);
  const popMenu = useMemo(() => {
    if (open) {
      return (
        <Portal>
          <PopMenu ref={ref}>
            {options.map((item, idx) => (
              <PopMenuItem isSelected={index === idx} key={item.value}>
                {item.label}
              </PopMenuItem>
            ))}
          </PopMenu>
        </Portal>
      );
    }
    return null;
  }, [open, options, index]);
  //插入提及
  const insertMention = (option: MentionOption) => {
    console.log(option);
    const mentionItem: MentionElement = {
      type: CustomElementType.MENTION,
      trigger: mention?.trigger,
      data: option,
      children: [{ text: 'wzx' }],
    };
    Transforms.insertNodes(editor, mentionItem);
    Transforms.move(editor);
  };
  //当菜单打开的时候按上下切换
  const onMentionKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (open) {
        switch (e.key) {
          case 'ArrowDown': {
            e.preventDefault();
            const prevIndex = index >= options.length - 1 ? 0 : index + 1;
            setIndex(prevIndex);
            break;
          }
          case 'ArrowUp':
            e.preventDefault();
            const nextIndex = index <= 0 ? options.length - 1 : index - 1;
            setIndex(nextIndex);
            break;
          case 'Tab':
          case 'Enter':
            e.preventDefault();
            Transforms.select(editor, target!);
            insertMention(options[index]);
            setTarget(undefined);
            break;
          case 'Escape':
            e.preventDefault();
            setTarget(undefined);
            break;
        }
      }
    },
    [editor, index, open, options, target]
  );
  const values: MentionValuesType = {
    target,
    index,
    search,
    ref,
    popOpen: open,
    popMenu: popMenu,
    options,
  };
  const actions = {
    setTarget,
    setIndex,
    setSearch,
    setMention,
    setPopOpen: set,
    onMentionKeyDown,
  };

  // 是否打开菜单的逻辑
  useEffect(() => {
    if (target && values.options.length > 0) {
      set(true);
      return;
    }
    set(false);
  }, [set, target, values.options]);
  // 当菜单打开的时候需要将节点定位到正确位置
  useEffect(() => {
    if (open) {
      const el = ref.current;
      if (el) {
        const domRange = ReactEditor.toDOMRange(editor, target!);
        const parentNode = el.parentNode as HTMLElement;
        const parentRect = parentNode.getBoundingClientRect();

        const rect = domRange.getBoundingClientRect();
        const elHeight = el.offsetHeight;
        const rectBottom = rect.bottom;
        const parentBottom = parentRect.bottom;
        //只处理底部的情况
        if (elHeight + rectBottom > parentBottom) {
          el.style.top = 'unset';
          el.style.bottom = `${parentBottom - rectBottom + 20}px`;
        } else {
          el.style.bottom = 'unset';
          el.style.top = `${rect.top + window.scrollY + 24}px`;
        }
        //@todo 处理顶部状态
        // console.log('parentRect-bottom', parentRect.bottom);
        // console.log('el-height', el.offsetHeight);
        // console.log('rect-bottom', rect.bottom);

        el.style.left = `${rect.left + window.scrollX}px`;
      }
    }
  }, [open]);

  return [values, actions];
};
export default useMention;
