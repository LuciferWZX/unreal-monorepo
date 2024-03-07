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
import { MentionConfig, MentionContainerProps, MentionOption } from '@/editor';
import {
  ClassNames,
  isFunction,
  isNumber,
  isString,
  isUndefined,
  scrollIntoView,
  useBoolean,
  useRequest,
} from '@wzx-unreal/react-hooks';
import { ReactEditor } from 'slate-react';
import Portal from '@/components/portal';
import PopMenu from '@/components/popMenu';
import PopMenuItem from '@/components/popMenuItem';
import { CustomElement, CustomElementType, MentionElement } from '@/types';
import PopMenuLoading from '@/components/popMenuLoading';

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
  insertMention: (option: MentionOption, nodes?: CustomElement[]) => void;
  onMentionKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
}
const useMention = (
  editor: Editor,
  theme?: 'dark' | 'light',
  mentionContainer?: MentionContainerProps
): [MentionValuesType, MentionActionsType] => {
  const [open, { set }] = useBoolean(false);
  const [target, setTarget] = useState<Range | undefined>(undefined);
  const [index, setIndex] = useState<number>(0);
  const [search, setSearch] = useState('');
  const [mention, setMention] = useState<MentionConfig | undefined>(undefined);
  const ref = useRef<HTMLDivElement | null>(null);
  const [options, setOptions] = useState<MentionOption[]>([]);
  // const [optLoading, { set: setOptLoading }] = useBoolean(false);
  const optQuery = async (keywords: string) => {
    if (isFunction(mention?.options)) {
      return await mention.options(keywords);
    }
    return [];
  };
  const { runAsync: queryOpts, loading: optLoading } = useRequest(optQuery, {
    manual: true,
    debounceWait: 500,
    debounceLeading: true,
  });
  useEffect(() => {
    if (mention) {
      const { options: _opts, filterKeys } = mention;
      if (isFunction(_opts)) {
        try {
          queryOpts(search).then((res) => {
            setOptions(res);
          });
        } catch (e) {
          console.error('fetch options error', e);
        }
      } else {
        setOptions(
          _opts.filter((item) => {
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
          })
        );
      }
    } else {
      setOptions([]);
    }
  }, [mention, queryOpts, search, set]);
  //过滤出来的选项
  // const options2 = useMemo(() => {
  //   if (mention) {
  //     const { options, filterKeys } = mention;
  //     return options.filter((item) => {
  //       if (filterKeys) {
  //         let flag = false;
  //         for (let i = 0; i < filterKeys.length; i++) {
  //           const key = filterKeys[i];
  //           const v = item[key];
  //           if (isNumber(v) || isString(v)) {
  //             const strValue = v.toString();
  //             if (strValue.toLowerCase().startsWith(search.toLowerCase())) {
  //               flag = true;
  //               break;
  //             }
  //           }
  //         }
  //         return flag;
  //       }
  //       return item.label.toLowerCase().startsWith(search.toLowerCase());
  //     });
  //   }
  //   return [];
  // }, [mention, search]);
  //当选中的时候默认有效的第一个
  useEffect(() => {
    if (mentionContainer?.onFilter) {
      mentionContainer.onFilter(options);
    }
    if (open) {
      for (let i = 0; i < options.length; i++) {
        const item = options[i];
        if (!item.disabled) {
          setIndex(i);
          break;
        }
      }
    }
  }, [options, open, mentionContainer?.onFilter]);

  //插入提及
  const insertMention = useCallback(
    (option: MentionOption, nodes?: CustomElement[]) => {
      Transforms.select(editor, target!);
      let mentionItem: CustomElement = {
        type: CustomElementType.MENTION,
        trigger: mention?.trigger,
        data: option,
        children: [{ text: option.label }],
      };
      if (mention?.customElement) {
        const customMentionItem = mention.customElement(option);
        if (customMentionItem) {
          mentionItem = customMentionItem;
        }
      }
      Transforms.insertFragment(editor, nodes ?? [mentionItem]);
      Transforms.move(editor);
      ReactEditor.focus(editor);
      editor.onChange();
      editor.normalize();
    },
    [editor, target, mention]
  );
  const popMenu = useMemo(() => {
    if (open) {
      const eclipse = mention?.eclipse;
      const customLoading = mentionContainer?.customLoading;
      return (
        <Portal>
          <PopMenu
            className={mentionContainer?.className}
            style={mentionContainer?.style}
            theme={theme}
            isEclipse={eclipse}
            ref={ref}
          >
            {optLoading
              ? customLoading || <PopMenuLoading />
              : options.map((item, idx) => {
                  if (mention?.customMentionItem) {
                    const classNames = ClassNames('unreal-comment-pop-menu-item', {
                      'unreal-comment-pop-menu-item-selected': index === idx,
                      'unreal-comment-pop-menu-item-disabled': !!item.disabled,
                    });
                    return mention.customMentionItem(
                      item,
                      {
                        'data-mention-index': `mention-item-${idx}`,
                        className: classNames,
                      },
                      {
                        disabled: !!item.disabled,
                        isSelected: index === idx,
                      },
                      {
                        onClick: () => !item.disabled && insertMention(item),
                      }
                    );
                  }
                  return (
                    <PopMenuItem
                      mentionId={`mention-item-${idx}`}
                      isSelected={index === idx}
                      key={item.value}
                      disabled={item.disabled}
                      onClick={() => !item.disabled && insertMention(item)}
                    >
                      {item.label}
                    </PopMenuItem>
                  );
                })}
          </PopMenu>
        </Portal>
      );
    }
    return null;
  }, [open, mentionContainer, mention, theme, options, index, insertMention, optLoading]);
  //获取有效的下标
  const getIndex = useCallback(
    (type: 'next' | 'prev') => {
      if (type === 'next') {
        for (let i = 0; i < options.length; i++) {
          if (i > index) {
            if (options[i].disabled) {
              if (i === options.length - 1) {
                return 0;
              }
              continue;
            }
            return i;
          }
        }
      }
      if (type === 'prev') {
        for (let i = options.length - 1; i >= 0; i--) {
          if (i < index) {
            if (options[i].disabled) {
              if (i === 0) {
                return options.length - 1;
              }
              continue;
            }
            return i;
          }
        }
      }
      return index;
    },
    [index, options]
  );
  //当上下移动的时候，如果有滚动条的话得滚动到可视区域
  useEffect(() => {
    if (index) {
      const el = document.querySelector(
        `[data-mention-index="mention-item-${index}"]`
      ) as HTMLElement;
      if (el) {
        scrollIntoView(el, {
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [index]);
  //当菜单打开的时候按上下切换
  const onMentionKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (open) {
        switch (e.key) {
          case 'ArrowDown': {
            e.preventDefault();
            // const prevIndex = index >= options.length - 1 ? 0 : index + 1;
            const nextIndex = getIndex('next');
            setIndex(nextIndex);
            break;
          }
          case 'ArrowUp':
            e.preventDefault();
            // const nextIndex = index <= 0 ? options.length - 1 : index - 1;
            const prevIndex = getIndex('prev');
            setIndex(prevIndex);
            break;
          case 'Tab':
          case 'Enter':
            e.preventDefault();
            if (options[index].disabled) {
              return;
            }
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
    insertMention,
    onMentionKeyDown,
  };

  // 是否打开菜单的逻辑
  useEffect(() => {
    if (!isUndefined(mentionContainer?.open)) {
      set(mentionContainer?.open);
      return;
    }
    if (optLoading) {
      set(true);
      return;
    }
    if (target && values.options.length > 0) {
      set(true);
      return;
    }
    set(false);
  }, [set, target, values.options, optLoading, mentionContainer?.open]);
  // 当菜单打开的时候需要将节点定位到正确位置
  useEffect(() => {
    if (open) {
      const el = ref.current;
      if (el && target) {
        el.style.display = 'unset';
        const domRange = ReactEditor.toDOMRange(editor, target);
        const parentNode = el.parentNode as HTMLElement;
        const parentRect = parentNode.getBoundingClientRect();

        let rect = domRange.getBoundingClientRect();
        const elHeight = el.offsetHeight;
        if (mentionContainer?.container) {
          rect = mentionContainer.container.getBoundingClientRect();
          el.style.left = `${rect.left}px`;
          if (mentionContainer.fullWidth !== false) {
            el.style.maxWidth = 'unset';
            el.style.width = `${rect.width}px`;
          }

          if (mentionContainer.position === 'bottom') {
            const elUsedHeight = rect.top + rect.height + elHeight;
            if (elUsedHeight <= parentRect.height) {
              //说明下方放的下
              el.style.top = `${rect.top + rect.height}px`;
              return;
            }
          }
          el.style.top = `${rect.top - elHeight}px`;
          return;
        }
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
  }, [editor, mentionContainer, open, target]);
  return [values, actions];
};
export default useMention;
